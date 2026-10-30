# Synthèse de la séance 2 — Fondamentaux d'UML, normes et modélisation

**Date :** 28 octobre 2026  
**Nature :** synthèse du cours effectivement dispensé, complémentaire au support transversal.

## Le fil conducteur

Cette séance approfondit les questions ouvertes lors de la découverte pratique : **qu'est-ce qu'un modèle, pourquoi modéliser, pourquoi UML est-il standardisé et qu'apporte un modèle informatisé au-delà d'un diagramme ?** L'analyse critique de la génération de diagrammes par LLM demeure transversale.

## 1. Un modèle est une représentation sélective

Un modèle représente certains aspects d'un système **pour répondre à une question et servir un objectif précis**. Toute représentation laisse délibérément des éléments de côté. Le même système appelle donc différents modèles selon la préoccupation : plan de métro pour les correspondances, carte topographique pour les distances, plan d'évacuation pour les sorties et les contraintes de sécurité.

Plusieurs analogies ont nourri la discussion :

- Le **« vertige pascalien »** rappelle l'impossibilité de tout décrire, à toutes les échelles et sous tous les points de vue.
- Le problème physique de **l'aiguille et de l'aimant** illustre qu'un raisonnement formellement correct peut reposer sur une représentation inadéquate du réel : la confrontation au domaine reste indispensable.
- La **géométrie**, visuelle et analytique, montre la complémentarité entre intuition graphique et vérification formelle.

**Maîtriser le formalisme ne garantit pas la justesse du contenu.** Une représentation utile n'est pas une copie exhaustive du réel.

## 2. Modéliser doit créer de la valeur

Un modèle peut clarifier des besoins, expliciter des hypothèses, réduire les malentendus, préparer des décisions et aider à vérifier une cohérence. Mais sa création, sa validation et sa maintenance ont un coût.

Les risques discutés sont notamment :

- **Obsolescence** : une carte ou un modèle non maintenu devient progressivement trompeur.
- **Illusion de précision** : augmenter le détail et l'exactitude coûte du temps et des moyens ; la précision doit être proportionnée au besoin.
- **Faux consensus** : des interlocuteurs peuvent approuver un même diagramme tout en lui donnant des sens différents.

La question préalable est donc : **« À quelle question doit répondre ce modèle, et pour qui ? »** On ne modélise pas pour modéliser.

## 3. D'où vient UML ?

La séance replace UML dans l'évolution de l'ingénierie logicielle : approches séparant données et traitements, montée de l'orientation objet, multiplication des méthodes et notations dans les années 1980–1990 (Booch, OMT, OOSE), puis effort d'unification.

Repères historiques présentés : adoption d'UML 1.1 par l'**OMG** en 1997 ; évolution majeure avec UML 2.0 autour de 2005 ; normalisation **ISO/IEC 19505** en 2012 ; spécification OMG UML **2.5.1** en 2017.

Il faut distinguer **langage** et **méthode** : UML définit des concepts, des relations, des règles et des notations ; une démarche de projet décide quand, pourquoi et comment les employer. L'adoption d'un langage commun ne prescrit pas une méthodologie unique.

## 4. Pourquoi les standards comptent-ils ?

La standardisation favorise des interfaces et représentations communes, plutôt qu'une multitude de solutions particulières. Les exemples des **dimensions standardisées de portes et de fenêtres**, des **connecteurs téléphoniques** et du **passage à l'USB-C** ont permis d'illustrer la production, le remplacement et l'interopérabilité.

Les spécifications publiées, la gouvernance du standard, les normes ISO et le caractère open source d'un logiciel sont des notions distinctes. Une déclaration de « compatibilité UML » ne constitue pas à elle seule une preuve de conformité ni d'échange fiable des modèles.

## 5. Le langage commun concerne les personnes ET les outils

La double dimension est au cœur du cours :

| Pour les personnes | Pour les systèmes informatiques |
|---|---|
| Notation lisible et vocabulaire partagé | Éléments identifiés et typés |
| Discussion entre disciplines et métiers | Propriétés, relations et contraintes exploitables |
| Analyse et validation collective | Vérification, requêtes et transformations |
| Transmission des connaissances | Échange, migration et réutilisation des modèles |

Les deux dimensions soutiennent la communication, la continuité des connaissances, l'indépendance vis-à-vis des fournisseurs et le décloisonnement des outils et des organisations. **La norme rend ces capacités possibles, mais leur réalisation dépend des outils, des pratiques de gouvernance et des formats d'échange effectivement pris en charge.**

## 6. UML et l'écosystème des spécifications OMG

- **UML** : langage de modélisation, ses concepts et ses notations.
- **MOF** : cadre de métamodélisation, permettant de définir la structure de langages de modélisation.
- **XMI** : sérialisation et échange XML de modèles.
- **OCL** : formulation de contraintes et expressions sur des modèles.
- **Profils UML** : mécanisme de spécialisation de constructions UML pour des besoins particuliers.

La séance souligne que l'échange des **diagrammes** et de leur mise en page entre ateliers reste particulièrement problématique. Même lorsque les outils prennent en charge les mêmes spécifications, la fidélité des échanges doit être vérifiée en pratique.

## 7. Dessiner n'est pas modéliser

Trois catégories ont été distinguées :

1. **Dessin** : formes, traits, textes ou pixels ; efficace pour communiquer, mais sans référentiel explicite d'éléments de modèle.
2. **Source de diagramme** : PlantUML ou Mermaid produisent des représentations à partir de textes structurés ; un rendu réussi n'atteste pas l'existence d'un modèle UML sémantique, partagé et cohérent.
3. **Modèle sémantique informatisé** : référentiel d'éléments, propriétés et relations permettant, selon les capacités de l'atelier, interrogation, validation, documentation, transformations et échange.

Le **diagramme est une vue sur un modèle**. Plusieurs représentations doivent pouvoir renvoyer aux mêmes éléments, plutôt que reconstituer leur cohérence uniquement dans la tête de leurs lecteurs.

L'analogie de **l'atlas imprimé et du GPS** oppose une vue figée à des vues produites et actualisées à partir de données exploitables. Une exportation PDF peut être une trace documentaire utile sans être elle-même le référentiel vivant.

## 8. Quels diagrammes pour quelles questions ?

- **Cas d'utilisation** : qui interagit avec le système, pour quels services ou objectifs ? Exemple : réservation d'un livre dans une bibliothèque.
- **Classes** : quels concepts, propriétés et relations du domaine ? Exemple : étudiant, réservation, livre, indépendamment des choix d'implémentation.
- **Activités** : comment les actions et décisions s'enchaînent-elles ?
- **Séquences** : quels échanges entre participants, dans quel ordre ?
- **Composants / déploiement** : comment les éléments techniques sont-ils organisés et hébergés ?

Une même réalité peut nécessiter plusieurs vues ; aucune n'est exhaustive.

## 9. Trois critères pour évaluer un modèle

| Critère | Question à poser |
|---|---|
| **Conformité** | Les constructions respectent-elles les règles de la notation et du langage applicables ? |
| **Interopérabilité** | Peut-on échanger et réinterpréter les informations du modèle entre outils, avec un niveau de fidélité suffisant ? |
| **Utilité** | Le modèle aide-t-il son destinataire à répondre à une question réelle, à un coût justifié ? |

Un diagramme bien présenté ou accepté par un moteur de rendu ne suffit pas à satisfaire ces critères. La validité des connaissances métier reste à contrôler séparément.

## 10. IA, retours des étudiants et suite

Le LLM permet de produire rapidement du PlantUML et de suggérer des concepts, mais il peut introduire des hypothèses incorrectes et ne garantit pas la cohérence des différentes vues. L'enseignant propose de reprendre les productions étudiantes en appliquant les critères de conformité, d'interopérabilité et d'utilité.

Le support projeté a amélioré la structuration perçue, mais la densité a suscité le besoin de **synthèses et de fiches récapitulatives**. La suite annoncée comprend un mini-QCM, un retour critique sur les modèles générés et une découverte plus concrète des ateliers de modélisation.

## Ressource commune

[Support PowerPoint UML 2026–2027](../../supports/initiation-uml-2026-2027.pptx).

*Document rédigé à partir de la synthèse de séance fournie par l'enseignant ; à relire avant publication. Les informations d'accès aux enregistrements ne figurent pas dans cette version.*
