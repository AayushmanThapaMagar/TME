import swell from '@/utils/swell'
import data from '@/utils/allProducts'

export default function Tests() {
    async function test() {
        const products = await swell.products.list();
        console.log(products);
    };

    async function test2() {
        const product = await swell.products.get('642c101ca1da5d0012b902f7');
        console.log(product);
    }
    return (
        <>
        <button>
            <a onClick={test}>Test</a>
        </button>

        <button>
            <a onClick={test2}>Mad honey</a>
        </button>
        </>
    );
    }