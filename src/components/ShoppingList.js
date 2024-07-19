import { plantList } from '../datas/plantList.js'

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
            <ul>
                {plantList.map((plant) => (
                    <li key={plant.id}>
                        {plant.name} 
                        {plant.isBestSale && <span> 🔥</span>} 
                        {plant.isSpecialOffer && <div className='lmj-sales'> SOLDES</div>}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList