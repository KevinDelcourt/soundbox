import React, {Component} from 'react'

export default class AboutPanel extends Component {

    render = () => 
    <div>
        <p><a href="https://github.com/KevinDelcourt/soundbox">Lien du projet Github</a></p>
        <p>Une boîte à sons pour faire des remix et autre, en hommage à la GLboite de l'époque. <small>RIP gerrive</small></p>
        
        <h2>Fonctionnalités</h2>
        <br />
        Cliquer sur un son pour le jouer. Naviguer avec le menu du bas.
        Dans la barre du haut, on peut de gauche à droite: 
        <ul>
            <li>Changer le volume des sons - <b>Bouton <i className="fas fa-volume-up"></i> et Slider</b></li>
            <li>Changer la vitesse de lecture des sons - <b>Bouton x1 et Slider</b></li>
            <li>Jouer le dernier son en boucle - <b>Bouton <i className="fas fa-redo-alt"></i></b></li>
            <li>Lire les sons aléatoirement - <b>Bouton <i className="fas fa-random"></i></b></li>
            <li>Afficher les raccourcis clavier, voir plus bas - <b>Bouton <i className="fas fa-keyboard"></i></b></li>
            <li>Mettre une vidéo youtube en arrière-plan - <b>Bouton <i className="fas fa-music"></i></b></li>
            <li>Rechercher un son - <b>Bouton <i className="fas fa-search"></i></b></li>
            <li>Afficher les playlists - <b>Bouton <i className="fas fa-bars"></i></b></li>
            <li>Afficher les options de l'administrateur - <b>Bouton <i className="fas fa-lock"></i></b></li>
        </ul>
        
        <h3>Les raccourcis clavier</h3>
        <p>Cette application peut se jouer à la souris mais des raccourcis clavier sont présents.</p>
        <ul>
            <li>Touches de A à Z -> <b>Joue le son correspondant</b> si des sons sont affichés ou <b>charge la playlist</b> correspondante si les playlists sont affichées (Bouton <i className="fas fa-bars"></i>)</li>
            <li>Touche [,] -> Ralenti x0.1</li>
            <li>Touche maj -> Affiche ou cache la liste des playlists</li>
        </ul>
    </div>
}