base=develop
head=models
output=src/typings/checkout

pr_title='Update models'
pr_body='OpenAPI spec or templates produced new models.'

# Overwrite all models
rm -rf "$output"
cp -r build/model "$output"

# Switch to automated branch
git checkout -b "$head" 2> /dev/null || true 
git add "$output"

if ! git diff --staged --exit-code; then
    echo 'Changes detected!'

    git commit -m 'Update models'
    git push origin "$head"
    gh pr create --title "$pr_title" --body "$pr_body" --base "$base" --head "$head" || true

    echo Changes published! 
else
    echo Nothing new, models are up-to-date! 
fi