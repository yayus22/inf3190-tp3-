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
from flask import Flask
from flask import render_template
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


@app.route('/animal/<int:animal_id>')
def view_animal(animal_id):
    data = get_db()
    animal = data.get_animal(animal_id)

    if animal is None:
        # You can customize this part to handle the case where the animal is not found
        return render_template('404.html')

    # Render a template with the details of the specific animal
    return render_template('animal.html', animal=animal)


@app.route('/')
def form():
    data = get_db()
    data_animal = data.get_animaux()
    # Shuffle the animaux list and select the first 5 elements
    shuffled_animaux = random.sample(data_animal, min(5, len(data_animal)))
    # À remplacer par le contenu de votre choix.
    return render_template('accueil.html', animaux=shuffled_animaux)
