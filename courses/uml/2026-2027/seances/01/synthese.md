# Synthèse de la séance 1 — Initiation à UML assistée par LLM

**Date :** 21 octobre 2026  
**Nature :** synthèse du cours effectivement dispensé, complémentaire au support transversal.

## Intention de la séance

Découvrir UML comme langage de modélisation visuel pour représenter la structure et le comportement de systèmes. Les étudiants ont exploré leurs propres domaines avec l'aide d'un LLM, puis visualisé et discuté des propositions produites sous forme de diagrammes PlantUML.

La démarche part des questions et du vocabulaire des étudiants : notamment **physique subatomique**, **environnement** et **gestion de l'eau**. Le diagramme est un support de discussion, non une preuve de validité.

## UML : un langage, pas une méthode

UML (*Unified Modeling Language*) unifie des concepts et notations de modélisation. Il définit des constructions dotées d'une syntaxe et d'une sémantique ; il n'impose pas une démarche de développement particulière. Le choix des diagrammes, leur niveau de détail et les conventions de travail dépendent du problème posé et des destinataires.

Une bonne représentation est **sélective** : elle doit permettre de comprendre quelque chose de précis, sans prétendre décrire toute la réalité ni remplacer l'implémentation.

## Expérimenter un LLM dans un domaine connu

L'exercice a consisté à :

1. Choisir un système connu dans son domaine et une question à examiner.
2. Demander à un LLM des concepts et un diagramme UML au format PlantUML.
3. Afficher le diagramme avec un outil en ligne.
4. Revoir le vocabulaire, les relations, les hypothèses et les conventions UML.
5. Identifier les corrections nécessaires et ce que le diagramme apporte réellement.

**Principe :** le LLM accélère l'exploration et la production d'un brouillon ; il ne remplace pas la connaissance du domaine. Une proposition plausible peut contenir des erreurs métier ou des constructions mal adaptées. Des productions différentes peuvent résulter d'une même consigne.

## Diagrammes abordés et exemples

### Diagrammes de classes : structure du domaine

Un diagramme de classes représente des concepts, attributs et relations. Dans l'exemple de **physique subatomique**, il relie événements, traces, *hits* et éléments du détecteur ; dans l'exemple environnemental, bassins versants, cours d'eau, stations de mesure, sources de pollution et mesures de qualité de l'eau.

Les multiplicités traduisent des règles à vérifier : une station peut enregistrer plusieurs mesures, chaque mesure étant liée à une station. Les relations de composition et d'agrégation doivent être interprétées en fonction des contraintes réelles du domaine, et non choisies pour leur aspect graphique. L'exemple événement–hits a notamment servi à discuter l'appartenance des parties à un tout.

### Diagrammes de séquence : interactions

Le diagramme de séquence montre les échanges entre participants dans un ordre temporel. L'exemple d'une simulation fait intervenir un utilisateur, un gestionnaire d'exécution, un générateur primaire, la construction du détecteur, le traitement des données et la production des résultats. Les conditions et répétitions permettent de préciser le scénario.

### Diagrammes d'activités : déroulement d'un processus

Le cas de la **surveillance de la qualité de l'eau** illustre l'analyse d'un seuil de pollution, une décision, des activités parallèles (alerter les autorités et étudier la propagation), puis une synchronisation avant d'autres mesures de protection. On distingue décision, parallélisme et synchronisation.

### Composants et déploiement : architecture

L'exemple environnemental comporte un capteur de terrain, une passerelle MQTT, un moteur d'alerte, une base géospatiale PostgreSQL et un tableau de bord SIG web. Ces vues aident à comprendre l'organisation technique et les échanges entre éléments, sans se substituer à un scénario temporel.

## Pourquoi utiliser des représentations visuelles ?

Les diagrammes donnent une vue d'ensemble et facilitent la détection de questions ou d'incohérences qui se perdraient dans un texte long. L'analogie avec une figure géométrique est utile : **la figure aide à voir et à formuler une hypothèse, mais ne constitue pas à elle seule une démonstration**.

## Points de vigilance

- Vérifier les faits et hypothèses métier auprès de personnes compétentes.
- Ne pas confondre validité du code PlantUML, correction de la notation et exactitude du modèle.
- Choisir les diagrammes en fonction d'une question et d'un destinataire.
- Ne pas chercher à employer toutes les constructions d'UML.
- Considérer les résultats du LLM comme des propositions révisables, non comme une autorité.

## Retours et suite

Les exemples issus des domaines des étudiants ont favorisé la participation. Une demande de **support plus structuré** a été exprimée ; la séance suivante a donc développé explicitement les fondements de la modélisation et les normes. Les synthèses complètent le PowerPoint transversal et l'enregistrement transmis séparément aux participants.

## Ressource commune

[Support PowerPoint UML 2026–2027](../../supports/initiation-uml-2026-2027.pptx).

*Document rédigé à partir de la synthèse de séance fournie par l'enseignant ; à relire avant publication.*
