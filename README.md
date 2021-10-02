# Getting Started with CAMP COFFEE REACT NATIVE

<h2>Steps to download and start contributing</h2>

1. Clone the project down to your local.  From your terminal, run
   <pre><code> git clone git@github.com:jdavault/camp-coffee-react-native.git 
   </code></pre>

2. Change your directory and run these two commands
   <pre><code> cd camp-coffee-react-native
	expo install
	expo start
   </code></pre>

3. BEFORE MAKING any CHANGES, do the steps below.  Get your main branch current (git pull), and then create a feature branch)
   <pre><code> git checkout main
	git pull
	git checkout -b feature-some-descriptive-name
   </code></pre>
   <ul>
  		<li>
	   	You can skip he first command if you are already in the main branch
		</li>
		<li>
	   	Give branch descriptive name (https://codingsight.com/git-branching-naming-convention-best-practices)
	  	</li>
	  	<li>
	   	Note, -b creates the branch, but if the branch has already been created  you can leave that off
		</li>
	</ul>
4. Make a few changes and then do a commit 
	<pre><code> git status
	git add .
	git status 
	git commit -m “Some descriptive info about your changes”
   </code></pre>
   <ul>
  		<li>
			Note, you can us add . or add each file separately
	  	</li>
	</ul>
5.  Once you have a few commits and feel like you are ready to collaborate with the team lead and do a PR
	<pre><code> git push –set-upstream origin feature-some-descriptive-name
   	</code></pre>
   	<ul>
  		<li>
			set upstream needed the first time .. you can also use -u instead 
	  	</li>
	</ul>
6.  After your pull requests has been approved and merged you can delete it locally and from github
     <pre><code>  git checkout main
	  git pull 
	  git branch -d feature-some-descriptive-name
	  git push origin --delete feature-some-descriptive-name
	  git branch
   	</code></pre>
   	<ul>
  		<li>
	Usually the PR approver will delete the remote branch after approving the PR
	  	</li>
	</ul>

##
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
