<?php

namespace Database\Seeders;

use App\Models\Menu;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Menu::create([
            'name' => 'Koren Spicy Chicken',
            'description' => 'Spicy chicken seasoned with Korean-inspired spices',
            'image' => '',
            'category' => 'Chicken Rice Bowl',
            'price' => 30000,
        ]);
        Menu::create([
            'name' => 'Honey Garlic Chicken',
            'description' => 'Chicken glazed in honey and garlic sauce',
            'image' => '',
            'category' => 'Chicken Rice Bowl',
            'price' => 30000,
        ]);
        Menu::create([
            'name' => 'Chicken Mushroom Sauce',
            'description' => 'Chicken cooked in a savory mushroom sauce',
            'image' => '',
            'category' => 'Chicken Rice Bowl',
            'price' => 30000,
        ]);
        Menu::create([
            'name' => 'Chicken Salted Egg',
            'description' => 'Chicken dish with a rich salted egg flavor',
            'image' => '',
            'category' => 'Chicken Rice Bowl',
            'price' => 30000,
        ]);
        Menu::create([
            'name' => 'Karage Egg Mayo',
            'description' => 'Crispy chicken topped with creamy mayo',
            'image' => '',
            'category' => 'Chicken Rice Bowl',
            'price' => 30000,
        ]);
        Menu::create([
            'name' => 'Chicken Katsu Teriyaki',
            'description' => 'Juicy chicken served with sweet teriyaki sauce',
            'image' => '',
            'category' => 'Chicken Rice Bowl',
            'price' => 30000,
        ]);
        Menu::create([
            'name' => 'Chicken Katsu Teriyaki Egg Mayo',
            'description' => 'Crunchy chicken with savory teriyaki and mayo',
            'image' => '',
            'category' => 'Chicken Rice Bowl',
            'price' => 30000,
        ]);
        Menu::create([
            'name' => 'Chicken Geprek Mozarella',
            'description' => 'Tender chicken topped with melted mozzarella cheese',
            'image' => '',
            'category' => 'Chicken Rice Bowl',
            'price' => 30000,
        ]);
        Menu::create([
            'name' => 'Chicken Teriyaki',
            'description' => 'Tender chicken glazed in savory teriyaki sauce',
            'image' => '',
            'category' => 'Chicken Rice Bowl',
            'price' => 30000,
        ]);
        Menu::create([
            'name' => 'Ayam Saos Mentega',
            'description' => 'Succulent chicken served with creamy butter sauce',
            'image' => '',
            'category' => 'Chicken Rice Bowl',
            'price' => 30000,
        ]);
        Menu::create([
            'name' => 'Ayam Cabe Garam',
            'description' => 'Spicy chicken seasoned with aromatic chili spices',
            'image' => '',
            'category' => 'Chicken Rice Bowl',
            'price' => 30000,
        ]);
        Menu::create([
            'name' => 'Ayam Geprek',
            'description' => 'Crispy chicken topped with spicy sambal sauce',
            'image' => '',
            'category' => 'Chicken Rice Bowl',
            'price' => 30000,
        ]);
        Menu::create([
            'name' => 'Ayam Sambal Matah',
            'description' => 'Juicy chicken served with tangy matah sambal',
            'image' => '',
            'category' => 'Chicken Rice Bowl',
            'price' => 30000,
        ]);
        Menu::create([
            'name' => 'Ayam Cabe Ijo',
            'description' => ' ',
            'image' => '',
            'category' => 'Chicken Rice Bowl',
            'price' => 30000,
        ]);
        //fish bowl
        Menu::create([
            'name' => 'Korean Spicy Fish',
            'description' => ' ',
            'image' => '',
            'category' => 'Fish Rice Bowl',
            'price' => 32000,
        ]);
        Menu::create([
            'name' => 'Honey Garlic Fish',
            'description' => ' ',
            'image' => '',
            'category' => 'Fish Rice Bowl',
            'price' => 32000,
        ]);
        Menu::create([
            'name' => 'Fish Mushroom Sauce',
            'description' => ' ',
            'image' => '',
            'category' => 'Fish Rice Bowl',
            'price' => 32000,
        ]);
        Menu::create([
            'name' => 'Fish Salted Egg',
            'description' => ' ',
            'image' => '',
            'category' => 'Fish Rice Bowl',
            'price' => 32000,
        ]);
        Menu::create([
            'name' => 'Ikan Saus Mentega',
            'description' => ' ',
            'image' => '',
            'category' => 'Fish Rice Bowl',
            'price' => 32000,
        ]);
        Menu::create([
            'name' => 'Ikan Cabe Garam',
            'description' => ' ',
            'image' => '',
            'category' => 'Fish Rice Bowl',
            'price' => 32000,
        ]);
        Menu::create([
            'name' => 'Ikan Geprek',
            'description' => ' ',
            'image' => '',
            'category' => 'Fish Rice Bowl',
            'price' => 32000,
        ]);
        Menu::create([
            'name' => 'Ikan Sambel Matah',
            'description' => ' ',
            'image' => '',
            'category' => 'Fish Rice Bowl',
            'price' => 32000,
        ]);
        Menu::create([
            'name' => 'Ikan Cabe Ijo',
            'description' => ' ',
            'image' => '',
            'category' => 'Fish Rice Bowl',
            'price' => 32000,
        ]);
        //Shrimp rice bowl
        Menu::create([
            'name' => 'Korean Spicy Shrimp',
            'description' => ' ',
            'image' => '',
            'category' => 'Shrimp Rice Bowl',
            'price' => 32000,
        ]);
        Menu::create([
            'name' => 'Honey Garlic Shrimp',
            'description' => ' ',
            'image' => '',
            'category' => 'Shrimp Rice Bowl',
            'price' => 32000,
        ]);
        Menu::create([
            'name' => 'Shrimp Mushroom Sauce',
            'description' => ' ',
            'image' => '',
            'category' => 'Shrimp Rice Bowl',
            'price' => 32000,
        ]);
        Menu::create([
            'name' => 'Shrimp Salted Egg',
            'description' => ' ',
            'image' => '',
            'category' => 'Shrimp Rice Bowl',
            'price' => 32000,
        ]);
        Menu::create([
            'name' => 'Udang Saus Mentega',
            'description' => ' ',
            'image' => '',
            'category' => 'Shrimp Rice Bowl',
            'price' => 32000,
        ]);
        Menu::create([
            'name' => 'Udang Cabe Garam',
            'description' => ' ',
            'image' => '',
            'category' => 'Shrimp Rice Bowl',
            'price' => 32000,
        ]);
        Menu::create([
            'name' => 'Udang Geprek',
            'description' => ' ',
            'image' => '',
            'category' => 'Shrimp Rice Bowl',
            'price' => 32000,
        ]);
        Menu::create([
            'name' => 'Udang Sambel Matah',
            'description' => ' ',
            'image' => '',
            'category' => 'Shrimp Rice Bowl',
            'price' => 32000,
        ]);
        Menu::create([
            'name' => 'Udang Cabe Ijo',
            'description' => ' ',
            'image' => '',
            'category' => 'Shrimp Rice Bowl',
            'price' => 32000,
        ]);
        //beef rice bowl
        Menu::create([
            'name' => 'Beef Blackpepper',
            'description' => ' ',
            'image' => '',
            'category' => 'Beef Rice Bowl',
            'price' => 38000,
        ]);
        Menu::create([
            'name' => 'Beef Yakiniku',
            'description' => ' ',
            'image' => '',
            'category' => 'Beef Rice Bowl',
            'price' => 38000,
        ]);
        //Drink
        Menu::create([
            'name' => 'Dalgona Milk',
            'description' => ' ',
            'image' => '',
            'category' => 'Drink',
            'price' => 15000,
        ]);
        Menu::create([
            'name' => 'Strawberry Milk',
            'description' => ' ',
            'image' => '',
            'category' => 'Drink',
            'price' => 15000,
        ]);
        //Mentai Rice
        Menu::create([
            'name' => 'Kani Mentai',
            'description' => ' ',
            'image' => '',
            'category' => 'Mentai Rice',
            'price' => 25000,
        ]);
        Menu::create([
            'name' => 'Chicken Katsu Mentai',
            'description' => ' ',
            'image' => '',
            'category' => 'Mentai Rice',
            'price' => 30000,
        ]);
        Menu::create([
            'name' => 'Chicken KatsuKkani Mentai Rice',
            'description' => ' ',
            'image' => '',
            'category' => 'Mentai Rice',
            'price' => 35000,
        ]);
        Menu::create([
            'name' => 'Ebi Katsu Mentai',
            'description' => ' ',
            'image' => '',
            'category' => 'Mentai Rice',
            'price' => 35000,
        ]);
        Menu::create([
            'name' => 'Ebi Katsu Kani Mentai',
            'description' => ' ',
            'image' => '',
            'category' => 'Mentai Rice',
            'price' => 40000,
        ]);
        Menu::create([
            'name' => 'Salmon Mentai',
            'description' => ' ',
            'image' => '',
            'category' => 'Mentai Rice',
            'price' => 40000,
        ]);
        Menu::create([
            'name' => 'Salmon Kani Mentai',
            'description' => ' ',
            'image' => '',
            'category' => 'Mentai Rice',
            'price' => 45000,
        ]);
        Menu::create([
            'name' => 'Tuna Mentai',
            'description' => ' ',
            'image' => '',
            'category' => 'Mentai Rice',
            'price' => 35000,
        ]);
        Menu::create([
            'name' => 'Tuna Kani Mentai',
            'description' => ' ',
            'image' => '',
            'category' => 'Mentai Rice',
            'price' => 40000,
        ]);
        //nusantara
        Menu::create([
            'name' => 'Ayam Bakar',
            'description' => ' ',
            'image' => '',
            'category' => 'Nusantara',
            'price' => 30000,
        ]);
        Menu::create([
            'name' => 'Ayam Kalasan',
            'description' => ' ',
            'image' => '',
            'category' => 'Nusantara',
            'price' => 30000,
        ]);
        Menu::create([
            'name' => 'Nila Goreng',
            'description' => ' ',
            'image' => '',
            'category' => 'Nusantara',
            'price' => 30000,
        ]);
        Menu::create([
            'name' => 'Nila Bakar',
            'description' => ' ',
            'image' => '',
            'category' => 'Nusantara',
            'price' => 30000,
        ]);
        Menu::create([
            'name' => 'Crispy Matah',
            'description' => ' ',
            'image' => '',
            'category' => 'Nusantara',
            'price' => 30000,
        ]);
        Menu::create([
            'name' => 'Crispy Tempong',
            'description' => ' ',
            'image' => '',
            'category' => 'Nusantara',
            'price' => 30000,
        ]);
        //Snack
        Menu::create([
            'name' => 'Pangsit Ayam',
            'description' => ' ',
            'image' => '',
            'category' => 'Snack',
            'price' => 25000,
        ]);
        Menu::create([
            'name' => 'Pangsit Udang',
            'description' => ' ',
            'image' => '',
            'category' => 'Snack',
            'price' => 30000,
        ]);
        Menu::create([
            'name' => 'French Fries',
            'description' => ' ',
            'image' => '',
            'category' => 'Snack',
            'price' => 18000,
        ]);
        Menu::create([
            'name' => 'Siumay Dimsum',
            'description' => ' ',
            'image' => '',
            'category' => 'Snack',
            'price' => 35000,
        ]);
        Menu::create([
            'name' => 'Siumay Mentai',
            'description' => ' ',
            'image' => '',
            'category' => 'Snack',
            'price' => 35000,
        ]);
        Menu::create([
            'name' => 'Cakwe Ayam',
            'description' => ' ',
            'image' => '',
            'category' => 'Snack',
            'price' => 30000,
        ]);
        Menu::create([
            'name' => 'Cakwe Udang',
            'description' => ' ',
            'image' => '',
            'category' => 'Snack',
            'price' => 35000,
        ]);
        Menu::create([
            'name' => 'Snack Platter',
            'description' => ' ',
            'image' => '',
            'category' => 'Snack',
            'price' => 40000,
        ]);
        Menu::create([
            'name' => 'Honey Wings',
            'description' => ' ',
            'image' => '',
            'category' => 'Snack',
            'price' => 30000,
        ]);
        Menu::create([
            'name' => 'Korean Spicy Wings',
            'description' => ' ',
            'image' => '',
            'category' => 'Snack',
            'price' => 30000,
        ]);
        Menu::create([
            'name' => 'Original Grilled Wings',
            'description' => ' ',
            'image' => '',
            'category' => 'Snack',
            'price' => 30000,
        ]);
    }
}
