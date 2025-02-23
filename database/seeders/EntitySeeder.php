<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EntitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('entity')->insert([
            [
                'title' => 'Loser, Baby',
                'meta' => json_encode([
                    'img_couverture' => 'Hazbin Hotel Frame.webp',
                    'video' => '<iframe width="560" height="315" src="https://www.youtube.com/embed/9sVoglgJjRg?si=_xd6VDvYur2FvTHG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                ]),
                'id_category' => 3,
                'id_author' => 1
            ],
            [
                'title' => 'Kumo Desu ga, Nani ka?',
                'meta' => json_encode([
                    'img_couverture' => 'Kumo Desu Ga, Nani Ka.webp',
                    'description' => 'Une lycéenne se réincarne en araignée dans un donjon mortel rempli de créatures redoutables...',
                    'note' => 89,
                    'lien' => 'https://mangadex.org/title/eb2d1a45-d4e7-4e32-a171-b5b029c5b0cb/kumo-desu-ga-nani-ka'
                ]),
                'id_category' => 1,
                'id_author' => 2
            ],
            [
                'title' => 'Genshin Impact is a Playable Anime',
                'meta' => json_encode([
                    'video' => '<iframe width="560" height="315" src="https://www.youtube.com/embed/ix4GLx0EPf4?si=OGgIo2ra5aXyKkFw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                ]),
                'id_category' => 5,
                'id_author' => 3
            ],
            [
                'title' => 'CyberPunk 2077',
                'meta' => json_encode([
                    'img_couverture' => 'cyberpunk 2077.webp',
                    'img_vignette' => 'Cyberpunk 2077 Cover.webp',
                    'description' => 'Cyberpunk 2077 plonge les joueurs dans Night City, une métropole futuriste où règnent la corruption...',
                    'note' => 94,
                    'video' => '<iframe width="560" height="315" src="https://www.youtube.com/embed/qIcTM8WXFjk?si=J879ctZ_Ku4PLhog" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                ]),
                'id_category' => 4,
                'id_author' => 4
            ],
            [
                'title' => 'Jurassic Park',
                'meta' => json_encode([
                    'img_couverture' => 'Jurassic Park.webp',
                    'description' => 'Dans Jurassic Park, un milliardaire crée un parc d\'attractions sur une île isolée, où des dinosaures clonés prennent vie...',
                    'note' => 94,
                    'video' => '<iframe width="560" height="315" src="https://www.youtube.com/embed/kxNDbxUZxNI?si=LZur4uu-h0QcS7-O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                ]),
                'id_category' => 7,
                'id_author' => 5
            ],
            [
                'title' => 'Pirates des Caraïbes : La Malédiction du Black Pearl',
                'meta' => json_encode([
                    'img_couverture' => 'Pirates des Caraibes 1.webp',
                    'description' => 'Pirates des Caraïbes : La Malédiction du Black Pearl suit le capitaine Jack Sparrow, un pirate excentrique...',
                    'note' => 94,
                    'video' => '<iframe width="560" height="315" src="https://www.youtube.com/embed/WiZC7l0ovvk?si=YQ-qOWGdX5tGyoKY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                ]),
                'id_category' => 7,
                'id_author' => 6
            ],
            [
                'title' => 'La casa de papel',
                'meta' => json_encode([
                    'img_couverture' => 'La casa de papel.webp',
                    'description' => 'La Casa de Papel suit un groupe de criminels, dirigé par le mystérieux "Le Professeur", qui organise le plus grand braquage...',
                    'note' => 88,
                    'video' => '<iframe width="560" height="315" src="https://www.youtube.com/embed/0ULjL4cbSro?si=tLwSLRBQyNmJml03" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                ]),
                'id_category' => 6,
                'id_author' => 7
            ],
            [
                'title' => 'Genshin Wallpaper Hu Tao',
                'meta' => json_encode([
                    'img_couverture' => 'Hu Tao BGD.jpeg',
                    'type' => 'desktop'
                ]),
                'id_category' => 8,
                'id_author' => 8
            ],
            [
                'title' => 'Hellsing Ultimate',
                'meta' => json_encode([
                    'img_couverture' => 'Hellsing Ultimate.webp',
                    'description' => 'Hellsing Ultimate suit l\'organisation secrète Hellsing, dirigée par Sir Integra Hellsing...',
                    'note' => 82,
                    'lien' => 'https://anime-sama.fr/catalogue/hellsing-ultimate/'
                ]),
                'id_category' => 2,
                'id_author' => 9
            ],
            [
                'title' => 'The Beginning After the End',
                'meta' => json_encode([
                    'img_couverture' => 'The Beginning After The End.webp',
                    'description' => 'The Beginning After the End raconte l’histoire du roi Arthur Leywin, qui se réincarne dans un monde magique...',
                    'note' => 98,
                    'lien' => 'https://anime-sama.fr/catalogue/the-beginning-after-the-end/'
                ]),
                'id_category' => 1,
                'id_author' => 10
            ],
            [
                'title' => 'Genshin Impact',
                'meta' => json_encode([
                    'img_couverture' => 'Genshin Impact.webp',
                    'img_vignette' => 'Genshin Impact Cover.webp',
                    'description' => 'Genshin Impact est un jeu de rôle en monde ouvert qui se déroule dans le royaume de Teyvat...',
                    'note' => 100,
                    'video' => '<iframe width="560" height="315" src="https://www.youtube.com/embed/TAlKhARUcoY?si=AQEuPawKyUJp28av" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                ]),
                'id_category' => 4,
                'id_author' => 8
            ],
            [
                'title' => 'Omniscient Reader\'s Viewpoint',
                'meta' => json_encode([
                    'img_couverture' => 'Omniscient Reader Viewpoint.webp',
                    'description' => 'Omniscient Reader\'s Viewpoint suit Kim Dokja, un homme ordinaire qui se retrouve dans un monde où les événements...',
                    'note' => 94,
                    'lien' => 'https://www.webtoons.com/en/action/omniscient-reader/list?title_no=2154'
                ]),
                'id_category' => 1,
                'id_author' => 11
            ],
            [
                'title' => 'Hell\'s Greatest Dad',
                'meta' => json_encode([
                    'img_couverture' => 'Hazbin Hotel Frame.webp',
                    'video' => '<iframe width="560" height="315" src="https://www.youtube.com/embed/jNUTxvki_d0?si=BTC4gtL-yIKfToiS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                ]),
                'id_category' => 3,
                'id_author' => 1
            ],
            [
                'title' => 'Ready For This Sing-Along',
                'meta' => json_encode([
                    'img_couverture' => 'Hazbin Hotel Frame.webp',
                    'video' => '<iframe width="560" height="315" src="https://www.youtube.com/embed/y1yNk8VeqqI?si=2olwV39AL5BT-SXV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                ]),
                'id_category' => 3,
                'id_author' => 1
            ],
            [
                'title' => 'More Than Anything',
                'meta' => json_encode([
                    'img_couverture' => 'Hazbin Hotel Frame.webp',
                    'video' => '<iframe width="560" height="315" src="https://www.youtube.com/embed/QzMHmnDwOz8?si=Q4tZnt7DUueH3iCR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                ]),
                'id_category' => 3,
                'id_author' => 1
            ],
            [
                'title' => 'The World After the Fall',
                'meta' => json_encode([
                    'img_couverture' => 'The World After The Fall.webp',
                    'description' => 'Après que l\'humanité ait été submergée par une série de cataclysmes, le protagoniste, Joo Hyun, se réveille dans un monde transformé...',
                    'note' => 82,
                    'lien' => 'https://www.webtoons.com/en/action/the-world-after-the-fall/list?title_no=4011'
                ]),
                'id_category' => 1,
                'id_author' => 11
            ],
            [
                'title' => 'The Eminence in Shadow',
                'meta' => json_encode([
                    'img_couverture' => 'The Eminence in Shadow.webp',
                    'description' => 'The Eminence in Shadow suit Cid Kagenou, un jeune homme qui rêve de devenir un génie des ombres...',
                    'note' => 80,
                    'lien' => 'https://mangadex.org/title/77bee52c-d2d6-44ad-a33a-1734c1fe696a/kage-no-jitsuryokusha-ni-naritakute'
                ]),
                'id_category' => 1,
                'id_author' => 12
            ],
            [
                'title' => 'The Ember Knight',
                'meta' => json_encode([
                    'img_couverture' => 'The Ember Knight_Korean.webp',
                    'description' => 'Lorsque le frère jumeau de Nagyunn, Najin, est assassiné sous ses yeux, il jure de venger la mort de son frère...',
                    'note' => 84,
                    'lien' => 'https://www.webtoons.com/en/fantasy/the-ember-knight/list?title_no=2886'
                ]),
                'id_category' => 1,
                'id_author' => 13
            ],
            [
                'title' => 'Tensei shitara Slime Datta Ken',
                'meta' => json_encode([
                    'img_couverture' => 'tensei shitara slime datta ken.webp',
                    'description' => 'Après avoir été tué, Satoru Mikami se réincarne dans un monde fantastique sous la forme d\'un slime nommé Rimuru Tempest...',
                    'note' => 76,
                    'lien' => 'https://anime-sama.fr/catalogue/tensei-shitara-slime-datta-ken/'
                ]),
                'id_category' => 2,
                'id_author' => 14
            ],
            [
                'title' => 'Jujutsu Kaisen',
                'meta' => json_encode([
                    'img_couverture' => 'jjk.webp',
                    'description' => 'Yuji Itadori, un lycéen au grand cœur, voit sa vie basculer lorsqu\'il avale un doigt maudit appartenant à Sukuna...',
                    'note' => 96,
                    'lien' => 'https://anime-sama.fr/catalogue/jujutsu-kaisen/'
                ]),
                'id_category' => 2,
                'id_author' => 15
            ],
            [
                'title' => 'Code Geass',
                'meta' => json_encode([
                    'img_couverture' => 'code geass.webp',
                    'description' => "Dans un monde où l'Empire de Britannia domine une grande partie du globe, Lelouch vi Britannia, un prince déchu, acquiert le pouvoir du Geass, lui permettant d'imposer sa volonté à quiconque. Sous le masque de Zero, il mène une rébellion contre Britannia pour venger sa mère et créer un monde meilleur pour sa sœur. Un anime mêlant stratégie, mecha et drame politique.",
                    'note' => '96',
                    'lien' => 'https://anime-sama.fr/catalogue/code-geass/'
                ]),
                'id_category' => 2,
                'id_author' => 16
            ],
            [
                'title' => 'Castlevania',
                'meta' => json_encode([
                    'img_couverture' => 'castlevania.webp',
                    'description' => "Inspiré de la célèbre saga de jeux vidéo, Castlevania suit Trevor Belmont, dernier descendant d’un clan de chasseurs de vampires, qui s’allie à Sypha, une magicienne, et Alucard, le fils de Dracula, pour stopper le règne de terreur du seigneur vampire. Un anime sombre et brutal, mêlant action, horreur et intrigues politiques.",
                    'note' => '94',
                    'lien' => 'https://anime-sama.fr/catalogue/castlevania/'
                ]),
                'id_category' => 1,
                'id_author' => 17
            ],
            [
                'title' => 'Helck',
                'meta' => json_encode([
                    'img_couverture' => 'Helck.webp',
                    'description' => "Après la défaite du Roi Démon, un tournoi est organisé pour désigner son successeur. Contre toute attente, Helck, un humain surpuissant, y participe en clamant vouloir exterminer son propre peuple. Soupçonneuse, la démonne Vamirio surveille cet étrange héros au sourire énigmatique. Un anime mêlant fantasy, humour et mystères sur fond de guerre entre humains et démons.",
                    'note' => '86',
                    'lien' => 'https://anime-sama.fr/catalogue/helck/'
                ]),
                'id_category' => 2,
                'id_author' => 18
            ],
            [
                'title' => 'Cyberpunk: Edgerunners',
                'meta' => json_encode([
                    'img_couverture' => 'Cyberpunk Edgerunners.webp',
                    'description' => "Dans le monde dystopique de Cyberpunk 2077, David Martinez, un jeune de la rue, tente de survivre à Night City après avoir implanté un dispositif cybernétique surpuissant. Rejoignant un groupe de mercenaires appelés \"edgerunners\", il plonge dans un univers brutal où technologie et corruption dictent la loi. Un anime nerveux, poignant et visuellement explosif.",
                    'note' => '98',
                    'lien' => 'https://anime-sama.fr/catalogue/cyberpunk-edgerunners/'
                ]),
                'id_category' => 2,
                'id_author' => 19
            ],
            [
                'title' => 'Hunter x Hunter (2011)',
                'meta' => json_encode([
                    'img_couverture' => 'Hunter x Hunter.webp',
                    'description' => "Gon Freecss, un jeune garçon rêveur, part à l'aventure pour devenir Hunter et retrouver son père disparu. En chemin, il se lie d'amitié avec Killua, Leorio et Kurapika, affrontant de redoutables adversaires dans des épreuves impitoyables. Un shonen culte mêlant action, stratégie et émotions intenses.",
                    'note' => '97',
                    'lien' => 'https://anime-sama.fr/catalogue/hunter-x-hunter/'
                ]),
                'id_category' => 2,
                'id_author' => 9
            ],
            [
                'title' => 'Oshi no ko',
                'meta' => json_encode([
                    'img_couverture' => 'Oshi no ko.webp',
                    'description' => "Goro, un médecin fan de la star Ai Hoshino, est assassiné et se réincarne en l’un de ses enfants. Découvrant les coulisses sombres de l’industrie du divertissement, il cherche à percer les secrets entourant la mort de sa mère. Un anime captivant mêlant drame, thriller et critique du showbiz.",
                    'note' => '90',
                    'lien' => 'https://anime-sama.fr/catalogue/oshi-no-ko/'
                ]),
                'id_category' => 2,
                'id_author' => 20
            ],
            [
                'title' => 'Solo Leveling',
                'meta' => json_encode([
                    'img_couverture' => 'Solo Leveling.webp',
                    'description' => "Dans un monde où des portails libèrent des monstres, des chasseurs affrontent ces menaces. Jinwoo Sung, le plus faible de tous, obtient un mystérieux pouvoir lui permettant de devenir plus fort en accomplissant des quêtes comme dans un RPG. Déterminé à survivre, il entame une ascension spectaculaire vers la toute-puissance. Un manhwa explosif mêlant action et fantasy.",
                    'note' => '96',
                    'lien' => 'https://anime-sama.fr/catalogue/solo-leveling/'
                ]),
                'id_category' => 1,
                'id_author' => 21
            ]
        ]);
    }
}
