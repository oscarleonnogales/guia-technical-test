import React from 'react';
import Cart from '../components/Cart';
import Header from '../components/Header';
import '../styles/AboutPage.css';

export default function AboutPage() {
	return (
		<>
			<Header />
			<h1 className="about-us-title">About Us</h1>
			<div className="about-us-paragraph">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Error maxime dolore asperiores commodi molestias saepe
				provident unde, excepturi voluptate, dolorum assumenda quasi qui at ut cumque nesciunt molestiae iusto nisi iste
				non, aliquam consectetur vel! Eveniet, eligendi in? Voluptatibus magni quisquam id eos eligendi? Est reiciendis
				unde, animi ipsa quia dignissimos nostrum vel suscipit in ea. Perferendis autem, quia natus temporibus deleniti
				soluta repudiandae cupiditate. Id voluptates nesciunt sequi. Itaque, fugiat similique impedit vitae laudantium
				perspiciatis neque necessitatibus quas ducimus iste dicta accusamus alias non assumenda porro hic officia!
				Optio, ducimus assumenda dicta neque officiis repudiandae impedit dolor commodi quibusdam.
			</div>
			<Cart />
		</>
	);
}
