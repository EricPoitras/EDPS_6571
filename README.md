# EDPS_7571
Applied Data Analytics and Visualization Course

# Source Material - Kaggle Titanic Data Mining Competition

https://www.kaggle.com/c/titanic/overview/evaluation

# Dataset

Train: https://ericpoitras.github.io/EDPS_7571/dataset/train.txt

Test: https://ericpoitras.github.io/EDPS_7571/dataset/test.txt

# Instructions 

Goal
It is your job to predict if a passenger survived the sinking of the Titanic or not. 
For each in the test set, you must predict a 0 or 1 value for the variable.

Metric
Your score is the percentage of passengers you correctly predict. This is known simply as "accuracy”.

![Image description](assets/CompetitionLeaderboard.PNG)

Submission File Format
You should submit a csv file with exactly 418 entries plus a header row. Your submission will show an error if you have extra columns (beyond PassengerId and Survived) or rows.

assets/CompetitionUpload.PNG

The file should have exactly 2 columns:

PassengerId (sorted in any order)
Survived (contains your binary predictions: 1 for survived, 0 for deceased)
PassengerId,Survived
 892,0
 893,1
 894,0
 Etc.
