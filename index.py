# Copyright 2023 <Votre nom et code permanent>
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import random
import re
from flask import Flask, abort
from flask import render_template, request 
from flask import redirect, url_for, flash
from flask import g
from .database import Database

app = Flask(__name__, static_url_path="", static_folder="static")


def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        g._database = Database()
    return g._database


@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.disconnect()


@app.route('/recherche_animaux', methods=['POST'])
def recherche_animaux():
    espece_recherchee = request.form.get('search')
    data = get_db()
    animaux_recherches = data.search_animaux(espece_recherchee)
    return render_template('resultats_recherche.html', animaux=animaux_recherches)


@app.errorhandler(404)
def page_not_found(error):
    return render_template("404.html"), 404


@app.route('/animal/<int:animal_id>')
def view_animal(animal_id):
    data = get_db()
    animal = data.get_animal(animal_id)
    if animal is None:
        return render_template('404.html')
    return render_template('animal.html', animal=animal)

@app.route('/liste')
def liste():
    data = get_db()
    data_animal = data.get_animaux()
    return render_template('accueil.html', animaux=data_animal)

@app.route('/form')
def form():
    return render_template('form.html')

@app.route('/accueil')
def accueil1():
    data = get_db()
    data_animal = data.get_animaux()
    shuffled_animaux = random.sample(data_animal, min(5, len(data_animal)))
    return render_template('accueil.html', animaux=shuffled_animaux)

@app.route('/ajouter_animal', methods=['GET', 'POST'])
def ajouter_animal():
    if request.method == 'POST':
        nom = request.form['nom']
        espece = request.form['espece']
        race = request.form['race']
        age = request.form['age']
        description = request.form['description']
        courriel = request.form['courriel']
        adresse = request.form['adresse']
        ville = request.form['ville']
        cp = request.form['cp']
        if not all([nom, espece, race, age, description, courriel, adresse, ville, cp]):
            flash('Veuillez remplir tous les champs du formulaire.', 'error')
            return redirect(url_for('ajouter_animal'))
        if ',' in nom or ',' in espece or ',' in race or ',' in description:
            flash('Aucun champ ne peut contenir une virgule.', 'error')
            return redirect(url_for('ajouter_animal'))
        if not (3 <= len(nom) <= 20):
            flash('Le nom de l\'animal doit avoir entre 3 et 20 caractères.', 'error')
            return redirect(url_for('ajouter_animal'))
        try:
            age = int(age)
            if not (0 <= age <= 30):
                raise ValueError
        except ValueError:
            flash('L\'âge doit être une valeur numérique entre 0 et 30.', 'error')
            return redirect(url_for('ajouter_animal'))
        if not '@' in courriel or '.' not in courriel.split('@')[-1]:
            flash('L\'adresse courriel doit avoir un format valide.', 'error')
            return redirect(url_for('ajouter_animal'))
        if not re.match(r'^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$', cp):
            flash('Le code postal doit avoir un format canadien.', 'error')
            return redirect(url_for('ajouter_animal'))
        db = get_db()
        last_inserted_id = db.add_animal(nom, espece, race, age, description, courriel, adresse, ville, cp)
        return redirect(url_for('view_animal', animal_id=last_inserted_id))

    return render_template('form.html')


@app.route('/')
def accueil():
    data = get_db()
    data_animal = data.get_animaux()
    shuffled_animaux = random.sample(data_animal, min(5, len(data_animal)))
    return render_template('accueil.html', animaux=shuffled_animaux)
