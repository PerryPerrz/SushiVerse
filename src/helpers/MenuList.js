import SushiSaumon  from '../assets/meals/sushi_saumon.png';
import SushiCrevette from '../assets/meals/sushi_crevette.jpg';
import RamenPoulet from '../assets/meals/ramen_poulet.png';
import RamenCanard from '../assets/meals/ramen_canard.jpg';
import Maki from '../assets/meals/maki.jpg';

export const MenuList = [
    {
        name: "Sushi Saumon",
        image: SushiSaumon,
        description: "",
        ingredients: "Saumon, Riz",
        price: 2.20 + " €",
    },
    {
        name: "Sushi crevette",
        image: SushiCrevette,
        description: "",
        ingredients: "Sauce Miso Yuzu, Coriandre, Kumquat, Crevette",
        price: 3.10 + " €",
    },
    {
        name: "Ramen au poulet",
        image: RamenPoulet,
        description: "",
        ingredients: "Nouilles de blé, Bouillon de légumes, Poulet, œuf ajitsuke, Poireaux émincés et marinés à la sauce sriracha, Pousses de bambou, Ciboulette Thaï",
        price: 15.50 + " €",
    },
    {
        name: "Ramen au canard",
        image: RamenCanard,
        description: "",
        ingredients: "Nouilles de blé, Bouillon de légumes, Canard, œuf ajitsuke, Poireaux émincés et marinés à la sauce sriracha, Pousses de bambou, Ciboulette Thaï",
        price: 15.90 + " €",
    },
    {
        name: "Maki",
        image: Maki,
        description: "",
        ingredients: "Riz, Saumon, Avocat, Concombre, Coriandre, Sauce soja",
        price: 6.20 + " €",
    }
]