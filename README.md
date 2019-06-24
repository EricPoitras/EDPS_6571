# EDPS 7571 Foundations of Applied Data Analytics and Visualization
This course introduces graduate students to the fundamental theory and techniques in data analytics. The course covers practical examples in relation to the tools and techniques of data mining and visualization, covering the following areas: open-source JavaScript libraries for building interactive dashboards and the RapidMiner data science platform for data preparation, machine learning, and predictive model deployment. At the end of the semester, students are expected to demonstrate their knowledge by developing a static dashboard to showcase their solution to the Kaggle Titanic Data Mining Competition. An emphasis is placed throughout the course on establishing effective data pipelines for training and testing predictive models and assumes no prior programming experience.

# Kaggle Titanic Data Mining Competition

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

![Image description](assets/CompetitionUpload.PNG)

The file should have exactly 2 columns:

PassengerId (sorted in any order)
Survived (contains your binary predictions: 1 for survived, 0 for deceased)
PassengerId,Survived
 892,0
 893,1
 894,0
 Etc.
 
 Example: https://ericpoitras.github.io/EDPS_7571/assets/EDPS7571TestData.csv
 
 # Upgrade Your Static Dashboard Into a Dynamic One 
 
 Setting Up POST REST API on RapidMiner Server:
 https://community.rapidminer.com/discussion/37418/sending-json-data-to-a-rapidminer-service-through-a-post-rest-api-call
 
 Setting Up Fetch Call on Client Side to Get Data:
 https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
 
