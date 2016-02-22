---
layout: layout.hbs
---

# Data Models
The data model for this app would require 5 components:

1. Users (Players)
   * key - User Number (primary key -- unique)
     * Username
	 * Password
	 * Region (where they live)
   
2. Games
	* key - Game Number (primary key -- unique)
	 * Players In Game (User Number)
	 * Created Timestamp
	 * Started Timestamp
	 * Completed Timestamp
	 
3. Candidates
	* key - Candidate Number (primary key -- unique)
	 * Game Number (from Games)
	 * Created Timestamp
	 * Started Timestamp
	 * Completed Timestamp

4. Election Results
	* key - Election Number (primary key -- unique)
	 * Candidate Number (from Candidates)
	 * User Results (Who won? How many votes did they get?)
	 * User Votes (who did they vote for)
	 * Voted Timestamp (mark if user voted or not)
	 
6. Campaigns
	* key - Campaign Number (primary key -- unique)
	 * User Number (from Users)
	 * List of Active Campaigns (what office is user running for?)
	 * Associated games with campaigns

# Revision

## Screen Requirements:

The app now fits the width dimensions of mobile devices. Also we can restrict the amount
of content on a screen s.t. scrolling is minimal--this can be achieved by using cards with
scroll bars that are contained in a small area. This was done using <meta> tags:
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

## Awareness:

Users will be able to see votes happen interactively (i.e. numbers increasing as votes come in).  I think it 
would be easiest to force users to vote once and be unable to change their vote later.
Users will also be able to see who is in an on going game (online/observing). It might be
fun to have a pop-up feature that informs observers when a user voted. Users will also have a chat box
to voice their opinions about an election--this would include a feature that informs individuals
about who is typing and when.

Lastly as votes come in in favor of one candidate or another the interactive map will color in favor of one candidate
or another. This is illustrated in the mockup--however regions where players reside will adjust as
the game plays out.


