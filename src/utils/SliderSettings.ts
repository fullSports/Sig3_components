export const sliderVerticalCards = {
	dots: true,
	className: 'center',
	infinite: true,
	speed: 800,
	slidesToShow: 6,
	slidesToScroll: 6,
	initialSlide: 0,
	responsive: [
		{
			breakpoint: 1740,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 5,
				infinite: true,
				dots: true,
			},
		},
		{
			breakpoint: 1440,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4,
				initialSlide: 2,
			},
		},
		{
			breakpoint: 1124,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				initialSlide: 2,
			},
		},
		{
			breakpoint: 860,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				initialSlide: 2,
			},
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				initialSlide: 2,
			},
		},
		{
			breakpoint: 605,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				initialSlide: 2,
			},
		},
	],
};

export const sliderHorizontalCards = {
	dots: true,
	className: 'center',
	infinite: false,
	speed: 800,
	slidesToShow: 4,
	slidesToScroll: 4,
	initialSlide: 0,
	responsive: [
		{
			breakpoint: 860,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				initialSlide: 2,
			},
		},
		{
			breakpoint: 426,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				initialSlide: 1,
			},
		},
	],
};
