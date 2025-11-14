const Blague = require('../models/blague');

const blagues = [
  "Quelle est la femelle du hamster ? L'Amsterdam",
  "Que dit un oignon quand il se cogne ? Aïe",
  "Quel est l'animal le plus heureux ? Le hibou, parce que sa femme est chouette.",
  "Pourquoi le football c'est rigolo ? Parce que Thierry en rit",
  "Quel est le sport le plus fruité ? La boxe, parce que tu te prends des pêches dans la poire et tu tombes dans les pommes.",
  "Que se fait un Schtroumpf quand il tombe ? Un Bleu",
  "Quel est le comble pour un marin ? Avoir le nez qui coule",
  "Qu'est ce que les enfants usent le plus à l'école ? Le professeur",
  "Quel est le sport le plus silencieux ? Le para-chuuuut",
  "Quel est le comble pour un joueur de bowling ? C'est de perdre la boule",
  "Quel métier les chiens peuvent-ils exercer ? Electrichien !",
  "Quel est le point commun entre un pêcheur et un mannequin ? Ils surveillent leur ligne",
  "Pourquoi ne faut-il jamais raconter d'histoires drôles à un ballon ? Parce qu'il pourrait éclater de rire",
  "Quels sont les animaux qui sont souvent fatigués ? Le dodo et le paresseux !",
  "Quel est l'animal le plus à la mode ? La taupe modèle",
  "Que fait une vache avec une radio ? De la meuhsique",
  "Comment appelle t-on une fleur qui prend sa graine à moitié ? Une migraine",
  "Quelle est l'étoile la plus sale ? L'étoile d'araignée",
  "Quelle est la blague à deux balles ? Pan Pan !",
  "Pourquoi faut-il se méfier des sirènes au volant ? Parce qu'elles font des queues de poisson",
  "Quel est le comble pour un professeur de géographie ? C'est de perdre le nord",
  "Quel animal est sourd ? Le crapaud, car il fait « coâ, coâ »",
  "Que disent les plongeur au nouvel an ? Bonne Apnée",
  "Quelles sont les lettres que l'on boit au petit déjeuner ? K.K.O",
  "Ce matin, j'ai voulu faire une blague sur le Super U... mais elle n'a pas Supermarché",
  "Où trouve-t-on des chats marrants ? Dans les livres car il y a des chats pitres",
  "J'ai 3 têtes, 3 jambes, 1 bras et 6 doigts. Qui suis-je ? Un menteur",
  "Que dit un vitrier à son fils pour qu'il soit sage ? Tiens-toi à carreaux si tu veux une glace",
  "Quel est le comble pour un électricien ? De ne pas être au courant",
  "Que fait une fraise sur un cheval ? Tagada, tagada !",
  "Pourquoi les canards sont-ils toujours à l'heure ? Parce qu'ils sont dans l'étang",
  "Pourquoi les professeurs aiment-ils les maths ? Parce qu'ils aiment les problèmes",
  "Pourquoi les indiens d'Amérique ont-ils froid ? Parce que Christophe Colomb les a découverts",
  "Comment reconnaît-on un gorille qui sonne à la porte ? Ça fait King-Kong !",
  "Qu'est-ce qu'une baguette avec une boussole ? Un pain perdu",
  "Dans quel sport est-on toujours d'accord ? Le hockey",
  "Quelle est la différence entre un crocodile et un alligator ? C'est Caïman la même chose",
  "Où les zombies font-ils de la natation ? A la mer Morte",
  "Deux laitues discutent dans un champ. Que se racontent-elles ? Des salades",
  "Quelles sont les lettres les plus vieilles de l'alphabet ? A.G.",
  "Qui faudrait-il appeler pour déblayer les trottoirs ? La reine, car la reine déneige",
  "Que dit un citron qui fait un cambriolage ? Plus un zeste !!",
  "Quel est le plat préféré des opticiens ? Les lentilles",
  "Quelle est la profession du soleil ? Chef de rayons",
  "Quel est le comble pour une abeille ? Partir en lune de miel",
  "Que disent deux fromages qui se prennent en photo ? Cheeeeese !",
  "Quel est le sport préféré des chèvres ? L'aéro-bique",
  "De quelle couleur sont les petits pois ? Rouge, car les petits poissons rouges",
  "Quel est le légume le plus explosif ? La roquette",
  "Quel super-héros joue le mieux au base-ball ? Batte-Man"
];

const seedBlagues = async () => {
  try {
    // Vérifie si des blagues existent déjà
    const count = await Blague.count();
    
    if (count === 0) {
      console.log('Initialisation de la base de données avec des blagues...');
      
      for (const texte of blagues) {
        await Blague.create({ texte });
      }
      
      console.log(`${blagues.length} blagues ajoutées avec succès !`);
    } else {
      console.log(`La base de données contient déjà ${count} blague(s).`);
    }
  } catch (error) {
    console.error('Erreur lors du seeding:', error);
  }
};

module.exports = seedBlagues;