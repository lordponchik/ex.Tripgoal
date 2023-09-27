# ex.Tripgoal

[Figma Layout](https://www.figma.com/file/OlmM3aNzcZp3LIzkqCSZVP/TripGoalLandingPage-u?type=design&node-id=1-10&mode=design&t=7CZWzfAL9X8IuQAy-0)

---

### Parceljs

  * npm init -y
  * npm install parcel-bundler -D
    
### Parceljs + deploy auf Github

  * npm install gh-pages

### package.json

scripts{
`"dev": "parcel src/index.html",`   
`"build": "parcel build src/index.html --public-url /repository_name/",`  
`"deploy": "gh-pages -d dist",`  
`"predeploy": "npm run build"`  
}
`"homepage": "https://name.github.io/repository_name/",`

