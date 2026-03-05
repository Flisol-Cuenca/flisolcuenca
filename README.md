## FLISOL CUENCA
Sitio oficial del evento Flisol Cuenca 2026

# Dependencias
La dependencias se encuentran declaradas en el archivo requirements.txt,
para instalarlas es necesario crear un entorno virtual de la siguiente forma
```
python3 -venv <nombre del entorno virtual>
source <nombre del entorno virtual>/bin/activate
pip install -r requirements.txt
```
***Es necesario tener instalado Python***

# Stack
Estamos usando Pelican para generar un sitio est4tico y subirlo a Github Pages

# Como ejecutar el proyecto
Primero debes activar el entorno virtual
```
source <nombre del entorno virtual>/bin/activate
```
y luego ejecuta
```
make html 2>&1
```