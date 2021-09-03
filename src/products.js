import { v4 as uuid } from 'uuid';
import rf1200 from './images/product-images/rf1200.jpg';
import gtair from './images/product-images/gt-air.jpg';
import moto3 from './images/product-images/moto3.jpg';
import xd4 from './images/product-images/xd4-helmet.jpg';
import scorpionHelmet from './images/product-images/scorpion-helmet.jpg';
import tcxBoots from './images/product-images/tcx-boots.jpg';
import sand3 from './images/product-images/sand3.jpg';
import strength from './images/product-images/strength.jpg';
import daineseRacing from './images/product-images/dainese-racing.jpg';
import crazy8 from './images/product-images/crazyeight.jpg';
import sidiAdventure from './images/product-images/sidiadventure.jpg';
import formaboots from './images/product-images/formaboots.jpg';
import airboots from './images/product-images/airboots.jpg';
import vertex from './images/product-images/vertex.jpg';
import klawGloves from './images/product-images/klawgloves.jpg';

const products = [
	{
		id: uuid(),
		name: 'Shoei RF-1200',
		image: rf1200,
		type: 'helmet',
		msrp: 499,
		quantity: 0,
	},
	{
		id: uuid(),
		name: 'Shoei GT-Air',
		image: gtair,
		type: 'helmet',
		msrp: 599,
		quantity: 0,
	},
	{
		id: uuid(),
		name: 'Bell Moto3',
		image: moto3,
		type: 'helmet',
		msrp: 249,
		quantity: 0,
	},
	{
		id: uuid(),
		name: 'Arai XD4 Helmet',
		image: xd4,
		type: 'helmet',
		msrp: 739,
		quantity: 0,
	},
	{
		id: uuid(),
		name: 'Scorpion EXO-AT950 Neocon Helmet',
		image: scorpionHelmet,
		type: 'helmet',
		msrp: 149,
		quantity: 0,
	},
	{
		id: uuid(),
		name: 'TCX Hero WP Boots',
		image: tcxBoots,
		type: 'boots',
		msrp: 249,
		quantity: 0,
	},
	{
		id: uuid(),
		name: `Rev'It! Sand 3 Jacket`,
		image: sand3,
		type: 'jacket',
		msrp: 399,
		quantity: 0,
	},
	{
		id: uuid(),
		name: 'Off The Chain 2.0 Textile Jacket',
		image: strength,
		type: 'jacket',
		msrp: 199,
		quantity: 0,
	},
	{
		id: uuid(),
		name: `REV'IT! Vertex Air Jacket`,
		image: vertex,
		type: 'jacket',
		msrp: 199,
		quantity: 0,
	},
	{
		id: uuid(),
		name: 'Dainese Racing 3 Perforated Jacket',
		image: daineseRacing,
		type: 'jacket',
		msrp: 579,
		quantity: 0,
	},
	{
		id: uuid(),
		name: 'Alpinestars Crazy Eight Leather Jacket',
		image: crazy8,
		type: 'jacket',
		msrp: 399,
		quantity: 0,
	},
	{
		id: uuid(),
		name: 'SIDI Adventure 2 Gore-Tex Boots',
		image: sidiAdventure,
		type: 'boots',
		msrp: 449,
		quantity: 0,
	},
	{
		id: uuid(),
		name: 'Forma Adventure Low Boots',
		image: formaboots,
		type: 'boots',
		msrp: 239,
		quantity: 0,
	},
	{
		id: uuid(),
		name: 'SIDI ST Air Boots',
		image: airboots,
		type: 'boots',
		msrp: 269,
		quantity: 0,
	},
	{
		id: uuid(),
		name: 'Scorpion EXO Klaw II Gloves',
		image: klawGloves,
		type: 'gloves',
		msrp: 54,
		quantity: 0,
	},
];

export default products;
