import '../styles/Cart.css';

function Cart() {

    const prixMonsteria = 8;
    const prixLierre = 10;
    const prixBouquet = 15;

    return (
        <div className='lmj-cart'>
            <h2>Panier</h2>
            <ul>
                <li>monstera : {prixMonsteria} €</li>
                <li>lierre : {prixLierre} €</li>   
                <li>Bouquet de fleur : {prixBouquet} €</li>
            </ul>
            <p>Total : {prixMonsteria + prixLierre + prixBouquet} € </p>
        </div>
    )
}

export default Cart