yarn build &&  
git checkout gh-pages &&
rm -rf *.htm *.js *.css *.png &&   
rm -rf dist  ;
git add . &&
git commit -m "update" &&
git push &&
git checkout -  