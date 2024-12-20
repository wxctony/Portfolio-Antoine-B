import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

# Chemin vers le fichier CSV (utilise le même emplacement où il a été sauvegardé)
file_path = r'C:\Users\Antoine\OneDrive\Documents\Came_equation_Mars_V2\eot_Mars.csv'

# Charger les données depuis le fichier CSV
data = pd.read_csv(file_path)

# Afficher un aperçu des données
print("Aperçu des données :")
print(data.head())

# Tracer le graphe
plt.plot(data['L_s'], data['E(t)'], label='Équation du temps sur Mars', color='orange')

# Ajouter des titres et des étiquettes
plt.title("Équation du temps sur Mars")
plt.xlabel("Longitude écliptique ($\lambda_s$ en degrés)")
plt.ylabel("E(t) (minutes)")

# Afficher la légende
plt.legend()

# Afficher la grille
plt.grid(True)

# Afficher les axe du repère orthonormé
plt.annotate('', xy=(max(data['L_s']), 0), xytext=(min(data['L_s']), 0),
    arrowprops=dict(arrowstyle='->', color='black', lw=1.5))
plt.annotate('', xy=(0, max(data['E(t)'])), xytext=(0, min(data['E(t)'])),
    arrowprops=dict(arrowstyle='->', color='black', lw=1.5))

# Ajouter les points noirs où E(t) = 0
zero_crossings = np.where(np.diff(np.sign(data['E(t)'])))[0]
plt.scatter(data['L_s'].iloc[zero_crossings], data['E(t)'].iloc[zero_crossings], 
            color='black', s=20, zorder=5)

# Liste de lettres pour annoter les points
letters = 'abcdefghijklmnopqrstuvwxyz'

# Boucle pour ajouter les annotations sur les points
for i, idx in enumerate(zero_crossings):
    plt.text(data['L_s'].iloc[idx] + 2, data['E(t)'].iloc[idx] + 2, letters[i], 
             fontsize=12, color='black', ha='right', va='bottom')

# Afficher le graphe
plt.show()