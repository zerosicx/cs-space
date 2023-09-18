# CS Space
CS Space functions as a web platform designed to disseminate information pertaining to computer science-related events, employment opportunities, scholarships, and various related topics. The primary objective of the website is to serve as a valuable resource for university students pursuing STEM disciplines, particularly those in Computer Science and Software Engineering programs.

In order to enhance its functionality, the website integrates a public API provided by The Muse's Developer's API. This API has been generously made available to our team, offering an increased request limit at no cost to developers. Notably, the website's database houses data on Hackathons, Events, and Scholarships, all of which are stored on AWS infrastructure. Our team takes responsibility for the direct updating of this information, ensuring that it remains current and relevant.

Given its target audience of University of Waikato students, user registration and login are requisite for access to the platform's offerings. Upon successful verification, users gain access to the curated information provided by our team, which comprises fellow University of Waikato students. 

# Getting Started
Download the dependencies: `npm install`
Pull the amplify environment: `amplify pull --appId d2h0rztbstrxz2 --envName main`
- Note: you must make sure you have the 555-aws-amplify credentials added to your .aws folder configurations. This instruction will not be added here for safety.
Run the application local: `npm start`

# Notes
When modifying the back-end, namely the Lambda functions or making any configuration changes with the AWS CLI, please ensure you are call `amplify push` before pushing to the GitHub repository. The back-end is not uploaded to GitHub for safety; so to ensure your modifications to the back-end are saved, call `amplify push`.
