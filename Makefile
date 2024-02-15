branches_remove:
	git branch | grep -v "main" | xargs git branch -D