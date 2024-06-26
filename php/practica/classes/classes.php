<?php

declare(strict_types=1);
class SuperHero
{

    public function __construct(
        private string $name,
        public array $powers,
        public string $planet,
    ) {
    }

    public function attack()
    {
    }

    public function description()
    {
        $powers = implode(",", $this->powers);
        return "$this->name es un superhéroe que viene de 
        $this->planet y tiene los siguientes poderes:s
        $powers.";
    }
    public static function random()
    {
        $names = ["Thor", "Ironman", "Hulk", "Spiderman", "Capitán América"];
        $powers = [
            ["Volar", "Super fuerza", "Visión de rayos X"],
            ["Super fuerza", "Super inteligencia", "Armadura"],
            ["Super fuerza", "Cambio de tamaño", "Resistencia"],
            ["Sentido arácnido", "Super fuerza", "Telarañas"],
            ["Super fuerza", "Resistencia", "Escudo"]
        ];
        $planet = ["Asgard", "Tierra", "Krull", "Krypton"];
        $name = $names[array_rand($names)];
        $powers = $powers[array_rand($powers)];
        $planet = $planet[array_rand($planet)];
        return new self($name, $powers, $planet);
    }
}

$hero = SuperHero::random();
