const theme = {
	global: {
		active: {
			background: {
				color: "gray",
			},
			color: "white",
		},
		drop: {
			background: "#444444",
			shadowSize: "medium",
			extend: `
          border-bottom-left-radius: 12px;
          border-bottom-right-radius: 12px;
  
          overflow: hidden;
        `,
		},
		elevation: {
			dark: {
				medium: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
			},
			light: {
				medium: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
			},
		},
		input: {
			weight: 400,
		},
		font: {
			size: "14px",
			family: "Arial",
		},
	},
};

export default theme;
