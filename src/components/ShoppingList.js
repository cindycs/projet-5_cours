import { plantList } from '../datas/plantList.js'
import PlantItem from './PlantItem'

import '../styles/ShoppingList.css';


function ShoppingList() {
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)
    return (
        <div>
            <h2>Catégories</h2>
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <h2>Liste des plantes</h2>
            <ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light }) => (
					<PlantItem
						id={id}
						cover={cover}
						name={name}
						water={water}
						light={light}
					/>
				))}
			</ul>
            
        </div>
    )
}

/*
<ul>
    {plantList.map((plant) => (
        <li key={plant.id}>
            {plant.name} 
            {plant.isBestSale && <span> 🔥</span>} 
            {plant.isSpecialOffer && <div className='lmj-sales'> SOLDES</div>}
        </li>
    ))}
</ul>

*/

export default ShoppingList