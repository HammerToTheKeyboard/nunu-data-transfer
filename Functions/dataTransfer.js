const oldUser = require('../Schema/oldUser')
const newUser = require('../Schema/newUser')
const level = require('./level')

module.exports = function(){    
    try {
        const oldUsers = await oldUser.find({})
        if(oldUsers){
            oldUsers.forEach(async user => {
                var discordId = user.discordId
                // Server Related
                var customRoleId = user.customRoleId
                var infractions = user.infractions
                // Twitch
                var twitchUsername = user.twitchUsername
                // League of Legends
                var summonerName = user.summonerName
                var verified = user.verified
                // League of Legends Games
                var gamesPlayed = user.gamesPlayed
                var wins = user.wins
                var losses = user.losses
                // Level Related
                var level = level(user.lifetimeExperience)
                var experience = user.lifetimeExperience                
                var xpCache = 0               
                var canEarnExperience = user.canEarnExperience
                // Currency
                var bank = user.bank
                var gold = user.gold
                var blueEssence = user.blueEssence
                var orangeEssence = user.orangeEssence
                var hasUsedDaily = user.hasUsedDaily 
                
                await new newUser({ 
                    discordId: discordId, 
                    customRoleId: customRoleId, 
                    infractions: infractions, 
                    twitchUsername: twitchUsername, 
                    summonerName: summonerName, 
                    verified: verified,
                    gamesPlayed: gamesPlayed, 
                    wins: wins, 
                    losses: losses, 
                    level: level, 
                    experience: experience, 
                    xpCache: xpCache,
                    canEarnExperience: canEarnExperience, 
                    bank: bank,
                    gold: gold, 
                    blueEssence: blueEssence, 
                    orangeEssence: orangeEssence, 
                    hasUsedDaily: hasUsedDaily 
                }).save()

            })
        }
    } catch (error) {
        console.error
    }
}