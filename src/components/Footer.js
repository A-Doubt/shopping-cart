function Footer() {
	return (
		<footer>
		<div className="links">
			<a href="https://fakestoreapi.com/" title="API from">API from: https://fakestoreapi.com/</a>
			{/* <div class="wrapper">Photo by <a href="https://unsplash.com/@taylorvanriper925?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Taylor Van Riper</a> on <a href="https://unsplash.com/s/photos/weather?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div> */}
		</div>
		<p className="github">Created by  
			<a className="github-link" href="https://github.com/A-Doubt">Paweł Wiśniewski</a>
			
			<a className="github-link" href="https://github.com/A-Doubt">
				<img src={require("../assets/GitHub-Mark-Light-64px.png")} alt="Git hub logo"/>
			</a>2022
		</p>
		<p> </p>
	</footer>
	)
}

export default Footer;
