-- Datenbank erstellen

CREATE DATABASE techacademy;

-- Nutzerdaten

CREATE TABLE userData (
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(100),
    goal VARCHAR(255),
    height_cm INT,
    current_weight INT,
    weight_goal INT,
    gender VARCHAR(100)
);

-- Allgemein alle Übungen

CREATE TABLE exercises (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    muscle VARCHAR(100),
    type VARCHAR(100),
    description VARCHAR(255)
);

    -- Brust

    INSERT INTO exercises (name, muscle, type, description)
    VALUES ('Bankdrücken', 'Brust', 'Langhantel', 'Auf eine flache Bank legen, Stange etwa Schulterbreit greifen und auf Höhe der unteren Brust führen');

    INSERT INTO exercises (name, muscle, type, description)
    VALUES ('Butterflies', 'Brust', 'Kurzhantel', 'Auf einer flachen Bank, Kurzhanteln über der Brust, Arme leicht gebeugt, im Halbkreis Arme nach unten führen');

    INSERT INTO exercises (name, muscle, type, description)
    VALUES ('Überzüge am Kabelzug', 'Kabelzug', 'Brust', 'Kabelzug von unten im 45° Winkel bis Brusthöhe führen');

    -- Rücken

    INSERT INTO exercises (name, muscle, type, description)
    VALUES ('Latzug', 'Rücken', 'Maschine', 'Schulterbreit greifen, Rücken strecken, Oberkörper leicht nach hinten, Stange bis unters Kinn führen, Ellbogen vor dem Oberkörper');

    INSERT INTO exercises (name, muscle, type, description)
    VALUES ('Enges Rudern', 'Rücken', 'Maschine', 'Beine leicht angewinkelt, Griff bis zum Bauch führen, Ellbogen am Körper halten');

    INSERT INTO exercises (name, muscle, type, description)
    VALUES ('Rumänisches Kreuzheben', 'Rücken', 'Langhantel', 'Beine, Rücken & Arme durchgestreckt, Oberkörper bis 90° runter und wieder hoch bewegen');

    -- Beine

    INSERT INTO exercises (name, muscle, type, description)
    VALUES ('Beinpresse', 'Beine', 'Maschine', 'Beine schulterbreit & parallel zueinander, Beine so weit wie möglich beugen und wieder durchstrecken');

    INSERT INTO exercises (name, muscle, type, description)
    VALUES ('Split Squats', 'Beine', 'Kurzhantel', 'Hanteln gestreckt neben dem Körper, schulterbreit stehen, ein Fuß nach vorne , hinteres Knie den Boden berühren lassen');

    INSERT INTO exercises (name, muscle, type, description)
    VALUES ('Beinbeuger', 'Beine', 'Maschine', 'Beine durchgestreckt parallel zum Boden, Beine beugen und beim strecken langsam und kontrolliert');

    -- Bizeps

    INSERT INTO exercises (name, muscle, type, description)
    VALUES ('Hammer Curls', 'Bizeps', 'Kurzhantel', 'Hanteln gestreckt neben dem Körper, Scheiben zeigen nach vorne, Arme ganz beugen, unten nicht ganz ausstrecken');

    -- Trizeps

    INSERT INTO exercises (name, muscle, type, description)
    VALUES ('Trizepsdrücken', 'Trizeps', 'Kabelzug', 'Stange schulterbreit halten, Handrücken zeigt zum Körper, Arme ganz durchstrecken');

    -- Schultern

    INSERT INTO exercises (name, muscle, type, description)
    VALUES ('Schulterdrücken', 'Schultern', 'Kurzhantel', 'Hanteln auf Kopfhöhe halten und gerade nach oben drücken, Arme nicht ganz durchstrecken');

    INSERT INTO exercises (name, muscle, type, description)
    VALUES ('Seitheben', 'Schultern', 'Kurzhantel', 'Kurzhanteln vor dem Körper, Scheiben zeigen zur Seite, Ellbogen nach oben führen');

    INSERT INTO exercises (name, muscle, type, description)
    VALUES ('Reverse Butterflies', 'Schultern', 'Maschine', 'Gerade sitzen, Hände auf Höhe der Schultern, Arme nicht ganz nach hinten');

-- Tabelle für die Fortschritte der individuellen Übungen

CREATE TABLE exercises (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    muscle VARCHAR(100),
    description VARCHAR(255),
    sets INT,
    repititions INT,
    weight INT,
    notes VARCHAR(255)
);