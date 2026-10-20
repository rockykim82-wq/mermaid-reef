(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const ih={title1:"Daisy",title2:"Coral",subtitle:"Mermaids of the Reef",place:"Sisters' Islands, Singapore",choose:"Who will you play?",daisy:"Daisy",coral:"Coral",leo:"Leo",friendPick:"Swimming with",play:"Play",holdToSwim:"Push the joystick, or touch and hold, to swim",clean:"Clean reef",complete:"The reef is clean!",completeSub:"The fish, turtles and corals say thank you!",coinsEarned:"Shell coins",nextTime:"More oceans are coming soon...",playAgain:"Play again",menu:"Menu",language:"Language",sound:"Sound",on:"On",off:"Off",restart:"Start over",resume:"Keep playing",untangle:"Stay close to untangle the net!",fact_bottle:"A plastic bottle can stay in the sea for 450 years!",fact_can:"Cans can be recycled again and again!",fact_bag:"Sea turtles can think plastic bags are jellyfish.",fact_net:"Lost fishing nets are called ghost nets. Sea animals get stuck in them.",devil:"Devil Science",narrator:"Story",next:"Next",skip:"Skip",story0:"{a} and {b} love diving at Sisters' Islands in Singapore.",story1:"But one day, a strange purple submarine appeared...",story2:"Mwahaha! I am Devil Science, the greatest scientist under the sea!",story3:"Look at this sea! Bottles, bags, nets... People made such a mess!",story4:"So YOU two will clean it up. Take my potion!",story5:"Whoa! My legs turned into a tail!",story6:"We're mermaids! How do we turn back?",story7:"Clean the oceans and find the antidote ingredients. Only then can you be human again! Mwahaha!",story8:"Look! His robots are dumping trash on the reef!",story9:"Let's catch the robots, fix them, and clean the reef together!",mission:"Mission",missionClean:"Pick up all the trash into your bag",missionRobots:"Catch and fix the robots",missionMap:"Check the map to find them",missionStars:"Be quick to earn 3 stars!",start:"Start!",watchStory:"Watch the story",fixRobot:"Stay close to fix the robot!",robotFixed:"Robot fixed! Now it helps you clean.",robotsLeft:"Fix the robots too!",time:"Time",map:"Map",worldTab:"World",singaporeTab:"Singapore",busanTab:"Busan",moreOceans:"Next ocean",youAreHere:"You are here",dragToSpin:"Drag to spin the Earth",singapore:"Singapore",malaysia:"Malaysia",indonesia:"Indonesia",sentosa:"Sentosa",marinaBay:"Marina Bay",sistersIslands:"Sisters' Islands",mbs:"Marina Bay Sands",merlion:"Merlion",flyer:"Singapore Flyer",stJohns:"St John's Island",oceanReef:"Great Barrier Reef",oceanHawaii:"Hawaii",oceanCaribbean:"Caribbean Sea",oceanMed:"Mediterranean Sea",oceanArctic:"Arctic Ocean",surfaceUp:"Up",diveDown:"Dive",flick:"Swish!",emptyBag:"Go and empty it!",surfaceHello:"Look! That's Singapore over there!",place_busan:"Haeundae, Busan, Korea",haeundae:"Haeundae",busan:"Busan",korea:"Korea",dongbaek:"Dongbaek Island",hwangok:"Mermaid Statue",marineCity:"Marine City",lct:"LCT Tower",gwangan:"Gwangan Bridge",skyCapsule:"Sky Capsule",oryukdo:"Oryukdo",surfaceHello_busan:"Look! That's Haeundae Beach!",chooseOcean:"Which sea?",go_busan:"Go to Busan",allOceansDone:"You saved all three oceans! 🎉",nextCountrySoon:"New countries are coming in an update. Which sea will it be? Stay tuned! 🌏",soonOcean:"Coming soon",bstory0:"The whale shark carried {a} and {b} all the way to Busan, Korea.",bstory1:"Thank you, whale shark! So this is Haeundae. The water is a little cooler here!",bstory2:"Look, there are kelp forests instead of corals! And sea urchins and starfish!",bstory3:"But then, a purple submarine they knew very well appeared...",bstory4:"Mwahaha! We meet again! I filled Busan's sea with trash too!",bstory5:"If you want the next antidote ingredients, clean up THIS sea! Mwahaha!",bstory6:"His robots are dumping trash again!",bstory7:"Watch out for sharks and giant jellyfish too. Let's save Haeundae's sea!",bend0:"Devil Science dropped another note as he zoomed away.",bend1:"Another page of the antidote recipe! The next ingredients are in India, in the Andaman Sea!",bend2:"Then we'll keep going! Thank you, Busan sea friends!",bend3:"The whale shark came back to carry them to their next adventure.",bend4:"Busan's sea is clean! Next stop: the Andaman Islands, India 🇮🇳",pets:"Pets",petShop:"Pet Shop",petShopSub:"Every pet gives you a new power!",buy:"Buy",owned:"With you!",needMore:"Need more shells",close:"Close",newPet:"A new friend is swimming with you!",pet_seahorse:"Seahorse",pet_dolphin:"Dolphin",pet_jellyfish:"Jellyfish",pet_turtle:"Sea Turtle",power_seahorse:"Magnet: pulls trash to you",power_dolphin:"Swim super fast",power_jellyfish:"Zap: stops robots so you can fix them",power_turtle:"Shield: robots can't drop trash near you",shieldBlock:"Shield! No trash here!",wardrobe:"Dress up",done:"Done",slot_top:"Top",slot_tail:"Tail",slot_hairStyle:"Hair",slot_hairColor:"Hair color",slot_accessory:"Clip",top_own:"My top",top_shell:"Shell top",top_sailor:"Sailor top",top_heart:"Heart top",top_sparkle:"Sparkle top",top_kebaya:"Kebaya",top_hanbok:"Hanbok jeogori",tail_own:"My tail",tail_ocean:"Ocean",tail_emerald:"Emerald",tail_purple:"Purple",tail_sunset:"Sunset",tail_silver:"Silver",tail_rainbow:"Rainbow",tail_gold:"Gold",tail_galaxy:"Galaxy",tail_batik:"Batik sarong",tail_chima:"Hanbok chima",hairStyle_bun:"Bun",hairStyle_ponytail:"Ponytail",hairStyle_twin:"Pigtails",hairStyle_long:"Long hair",hairStyle_short:"Short hair",hairStyle_spiky:"Spiky hair",hairColor_brown:"Brown",hairColor_pink:"Pink",hairColor_blonde:"Blonde",hairColor_black:"Black",hairColor_blue:"Blue",hairColor_purple:"Purple",hairColor_mint:"Mint",hairColor_silver:"Silver",accessory_daisy:"Daisy",accessory_star:"Star clip",accessory_goggles:"Goggles",accessory_none:"Nothing",accessory_bow:"Bow",accessory_crown:"Crown",accessory_shell:"Shell clip",accessory_sunglasses:"Sunglasses",accessory_cap:"Cap",accessory_catEars:"Cat ears",accessory_flowers:"Flower crown",accessory_pirate:"Pirate hat",accessory_tiara:"Pearl tiara",accessory_halo:"Halo",accessory_unicorn:"Unicorn horn",accessory_sharkHat:"Shark hat",accessory_jellyHat:"Jellyfish hat",accessory_orchid:"Orchid",accessory_daenggi:"Daenggi ribbon",tradDress:"Clothes from the countries you visit",dress_kebaya:"Kebaya: a blouse with flowers stitched on, worn in Singapore and its neighbours. Peranakan ladies close it with three gold brooches.",dress_batik:"Batik: patterns drawn with hot wax, then dyed. A batik sarong is wrapped around like a skirt.",dress_orchid:"Singapore's national flower is an orchid called Vanda Miss Joaquim.",dress_hanbok:"Hanbok: Korea's traditional clothes. The top is a jeogori, tied with a ribbon called goreum. Rainbow sleeves are called saekdong.",dress_chima:"Chima: the long, full skirt of a hanbok. A yellow jeogori with a red chima is a classic look.",dress_daenggi:"Daenggi: a ribbon tied at the end of a long braid. Korean girls wore red ones long ago.",mysteryBox:"Mystery box",mysteryTap:"Tap the box to open it!",mysteryNew:"New item!",wearIt:"Wear it!",later:"Later",mysteryOnly:"Comes from a mystery box or a gift",mysteryAll:"You found every mystery item!",surprise:"Surprise gift!",giftAppeared:"The robot left you a present! 🎁",giftCoins:"The present had shell coins inside!",newLook:"So pretty!",boss0:"What?! You cleaned the WHOLE reef?!",crab1:"Remember the kind chili crab who lived here? My machine turned it into a ROBOT CHILI CRAB! Snap snap!",crab2:"Its robot shell and the remote box on its back make it do whatever I say! Hahaha!",crab3:"Poor crab! Look, a red mark on the sand. That is where the claw will snap. Swim away from it!",crab4:"When its claw gets stuck, bump the glowing box on its back. Let's turn it back into a good crab!",crabHint:"Swim away from the red mark! Claw stuck? Bump the glowing box on its back! 🦀",crabRound2:"Grrr! Now it spits spicy chili sauce! Stay out of the red clouds! 🌶️",crabRound3:"Two claws at once now! Watch both red marks! 🦀🦀",crabSauce:"Achoo! Spicy chili sauce! 🌶️",crabWin:"The robot shell fell off! It's a good chili crab again... and it looks delicious! 🦀💚",octo1:"The friendly octopus from Jagalchi Market? My machine turned it into a ROBOT OCTOPUS!",octo2:"Metal arms and remote rings on all eight! Now it does whatever I say!",octo3:"Poor octopus! Look, red marks on the sand. That's where its arms will slam down. Swim away!",octo4:"When an arm lies tired, bump its glowing ring. Let's free all eight and bring the good octopus back!",octoHint:"Dodge the red marks! Bump the glowing ring on a tired arm! 🐙",octoRound2:"Splurt! Now it squirts ink! Stay out of the black clouds! 🖤",octoRound3:"It's swimming after you! Just two arms left! 🐙",octoInk:"Ink! Everything went dark! 🖤",octoWin:"The robot armor fell off! The good octopus is back, waving all eight arms! 🐙💚",ele1:"The gentle elephant that swims at Elephant Beach? My machine turned it into a ROBOT ELEPHANT!",ele2:"My control box is in the seat on its back. Charge, elephant, charge!",ele3:"Poor elephant! Look, a red lane on the sand. That's where it will charge. Get out of the way!",ele4:"After a charge it gets dizzy. Then swim onto its back and bump the glowing box. Let's bring the good elephant back!",eleHint:"Get out of the red lane! When it is dizzy, bump the glowing box on its back! 🐘",eleRound2:"Pwoo! Now it sprays water from its trunk! Stay out of the water clouds! 💦",eleRound3:"Now it charges twice in a row! Watch out! 🐘",eleSplash:"Splash! A trunk full of water! 💦",eleWin:"The robot armor fell off! The good elephant is back and splashing happily! 🐘💚",devilFlee:"Grr! I'll be back in the next ocean!",ingredientHint:"Follow the golden light! ✨",ingredientAppeared:"An antidote ingredient appeared! Follow the golden light ✨",ingredient_seagrape:"Sea grapes",ingredient_pearl:"Giant clam pearl",ingredient_rainbowCoral:"Rainbow coral",ingredient_kelp:"Kelp",ingredient_camellia:"Camellia flower",ingredient_feather:"Seagull feather",got_kelp:"You found kelp! Kelp forests in Korea's sea are homes for lots of fish.",got_camellia:"You found a camellia! It's Busan's city flower and blooms on Dongbaek Island.",got_feather:"You found a seagull feather! The seagull is Busan's city bird.",got_seagrape:"You found sea grapes! This seaweed really grows in Singapore's sea.",got_pearl:"You found a pearl! Giant clams live at Sisters' Islands.",got_rainbowCoral:"You found rainbow coral! Healthy corals are full of color.",lab:"Potion lab",tempPotion:"Quick potion",tempPotionSub:"Use one ingredient to be human for a little while!",noIngredients:"Find ingredients under the golden light first!",stirIt:"Tap the pot to stir!",drink:"Drink!",alreadyHuman:"You're human right now!",antidote:"The real antidote",antidoteSub:"Collect the ingredients from every ocean to be human again forever!",humanStart:"We're human! Only for a little while...",humanEnd:"Oh! The potion wore off. We need the real antidote!",missionIngredients:"Find antidote ingredients in the golden light",missionRescue:"Save the sea animals in trouble",missionRecycle:"Recycle your bag for coins",bagFull:"The bag is full! Swim to the recycling corner ♻️",recycle:"Take the bag to the recycling corner ♻️",rescue:"Stay close to help it!",escort:"Take the lost clownfish home to its anemone! 🏠",escortOctopus:"Take the lost baby octopus home to its rock den! 🏠",findShell:"This crab lives in a can! Find it a real shell.",bringShell:"Bring the shell to the crab!",animalsLeft:"Some animals still need help! 💗",recycleTitle:"Recycling corner",bin_machine:"Bottles & cans",bin_blue:"Plastic bags",bin_nets:"Old nets",refund:"Money back",recycleIntro_busan:"In Korea, put PET bottles and cans into a recycling machine and you get points back! Peel the label off clear bottles and keep them separate.",recycleIntro:"In Singapore, put an empty drink bottle or can into a recycling machine and you get 10 cents back!",recycleDone:"All sorted! Great recycling!",recycleFact_machine:"Old bottles can become new bottles, or even T-shirts!",recycleFact_can:"A recycled can can be back in the shop as a new can in about 60 days!",recycleFact_nets:"Old fishing nets can be turned into swimsuits and carpets!",keepSwimming:"Keep swimming",totalRefund:"All money back so far",album:"Rescue book",albumSub:"The sea animals you saved",notYet:"Not met yet",animal_turtle:"Sea turtle",animal_fish:"Blue fish",animal_seahorse:"Seahorse",animal_clownfish:"Clownfish",animal_crab:"Hermit crab",animal_octopus:"Baby octopus",rescued_octopus:"The baby octopus is home! Octopuses hide in rock dens and can change color.",rescued_turtle:"Turtle saved! Hawksbill turtles lay their eggs on Singapore's islands.",rescued_fish:"Fish saved! Fish can get stuck in plastic bags.",rescued_seahorse:"Seahorse saved! Seahorse dads carry the babies in a pouch.",rescued_clownfish:"The clownfish is home! Clownfish hide safely in anemones.",rescued_crab:"The hermit crab has a new home! Sometimes crabs have to use trash as shells.",safetyCards:"Sea safety cards",secretFriends:"Secret friends",secretHint:"Someone is hiding somewhere...",secretFound:"You found a secret friend!",comeAlong:"Let's go together!",danger_crocodile:"Saltwater crocodile",danger_boxJelly:"Box jellyfish",danger_lionfish:"Lionfish",danger_stonefish:"Stonefish",dangerFact_crocodile:"The biggest reptile, and it can swim in the sea. One visited Sentosa's beaches in 2026. If you see one, get out of the water and stay far away.",dangerFact_boxJelly:"A square, see-through jellyfish with long stingers. A new kind was found near Sentosa in 2026. If one stings you, tell a grown-up and pour on vinegar.",dangerFact_lionfish:"Pretty stripes and fan fins, but its spines are venomous. Look with your eyes only!",dangerFact_stonefish:"It looks just like a stone on the sea floor and has venomous spines. Wear water shoes and never step on rocks in the sea.",dangerSeen_boxJelly:"Careful, a box jellyfish! Swim around it.",dangerSeen_lionfish:"A lionfish! Pretty, but its spines sting. Look, don't touch!",dangerSeen_stonefish:"That stone has eyes! A stonefish hides on the sea floor. Don't dive onto it!",dangerHit_crocodile:"Chomp! The crocodile bumped you. Swim fast and flick your tail!",dangerHit_boxJelly:"Ouch, a box jellyfish sting! Real stings need vinegar and a grown-up.",dangerHit_lionfish:"Ouch, lionfish spines! Look with your eyes only.",dangerHit_stonefish:"Ouch, a stonefish! It looked just like a stone.",spilled:"Some trash fell out of the bag. Pick it up again!",coming_crocodile:"A crocodile! Swim away fast!",escaped_crocodile:"Phew, you got away from the crocodile!",danger_mako:"Shortfin mako shark",danger_nomura:"Nomura's jellyfish",danger_blueRing:"Blue-ringed octopus",danger_stingray:"Red stingray",dangerFact_mako:`One of the fastest sharks in the world. Makos sometimes swim in Korea's seas. If a lifeguard says "shark!", get out of the water calmly and quickly.`,dangerFact_nomura:"One of the biggest jellyfish in the world: wider than a grown-up is tall! In summer it drifts to Korea, so Haeundae puts up jellyfish nets. Even a dead one on the sand can sting.",dangerFact_blueRing:"Small and cute, but one of the most venomous animals in the sea. It now lives on Busan's rocky shores too. Never pick up an octopus, even a tiny one.",dangerFact_stingray:"It hides flat in the sand and has a stinging spine on its tail. In shallow water, shuffle your feet so stingrays swim away first.",dangerSeen_nomura:"Whoa, a giant Nomura's jellyfish! Keep far away from its arms.",dangerSeen_blueRing:"A tiny octopus with blue rings! It's very venomous. Don't dive onto it!",dangerSeen_stingray:"A stingray gliding over the sand. Its tail has a spine. Stay above it!",dangerHit_mako:"Whoosh! The mako bumped you. Flick your tail to swim faster!",dangerHit_nomura:"Ouch, a jellyfish sting! Real stings: get out of the water and tell a grown-up.",dangerHit_blueRing:"Oh no, the blue-ringed octopus! Real ones should never be touched.",dangerHit_stingray:"Ouch, the stingray's tail! Shuffle your feet in shallow water.",coming_mako:"A mako shark! Swim away fast!",escaped_mako:"Phew, you got away from the mako shark!",newSafetyCard:"New card in the book!",friend_porpoise:"Finless porpoise family",pet_porpoise:"Finless porpoise",power_porpoise:"Sonar: clicks to find the nearest trash",friendFact_porpoise:"Korea's smiling porpoise has no back fin. Families live in Busan's sea, and they need clean water and fewer fishing nets to stay safe.",friend_otter:"Otter family",pet_otter:"Otter",power_otter:"Fetch: brings you trash from nearby",friendFact_otter:"Smooth-coated otters play around Marina Bay and the Merlion. They came back when Singapore's rivers got clean!",end0:"As Devil Science zoomed away, a note fluttered down from his submarine.",end1:"It's the antidote recipe! It says: the next ingredient is in the sea at Busan, Korea!",end2:"Busan? That's where Haeundae Beach is! But it's so far away...",end3:"Just then, a giant whale shark swam up. The biggest fish in the sea, and very gentle!",end4:"The robots and sea friends waved goodbye. Thank you, {a} and {b}!",end5:"Whale shark, will you take us all the way to Busan?",end6:"Singapore's sea is clean! Next adventure: Haeundae, Busan 🇰🇷",nextOcean_busan:"Next ocean: Haeundae, Busan, Korea 🇰🇷",login:"Log in",logout:"Log out",deleteAccount:"Delete account",deleteWarn:"This deletes this player and everything saved online: coins, clothes, pets and oceans. It can't be undone.",deletePin:"To delete, tap your 4 secret pictures again.",keepAccount:"Keep my account",accountDeleted:"The account is deleted. Bye!",whoAreYou:"What is your name?",namePlaceholder:"Name",pickPin:"Tap your 4 secret pictures",pinHelp:"Remember them: they open your game on any iPad.",newPlayer:"First time here? Start a new game with this name?",yesNew:"Yes, new player",tryAgain:"Try again",wrongPin:"Those pictures are different. Try again!",busy:"Too many tries. Rest a little, then try again.",offline:"Can't reach the internet. Check the Wi-Fi.",hello:"Hi",savedOnline:"Your game is saved online, on every iPad.",coop:"Play together",makeRoom:"Make a room",joinRoom:"Join a room",tellFriend:"Show your friend these 3 pictures",waitingFriend:"Waiting for a friend...",friendIn:"is here!",pickRoom:"Tap the 3 room pictures",noRoom:"There is no room with those pictures.",roomFull:"That room is full.",joined:"You're in! The game starts when your friend presses Play.",waitHost:"Your friend starts the game",friendLeft:"Your friend left. Keep swimming!",leaveRoom:"Leave the room",needLogin:"Log in first to play together",together:"Together",danger_triggerfish:"Titan triggerfish",danger_seaKrait:"Banded sea krait",danger_crownThorns:"Crown-of-thorns starfish",danger_moray:"Giant moray eel",dangerFact_triggerfish:"A big reef fish with strong buck teeth. It guards its nest on the sand and chases anyone who comes close. Its guard zone is shaped like an upside-down cone, so swim away sideways, not up!",dangerFact_seaKrait:"A sea snake with black and blue-grey stripes. Its venom is very strong, but it is calm and shy. Never touch one: stay still and let it swim past.",dangerFact_crownThorns:"A big starfish covered in sharp, venomous spines. It eats coral, so too many of them can hurt a reef. Never touch one, and tell a grown-up or a dive guide if you see lots of them.",dangerFact_moray:"Morays hide in holes in the rocks and open and close their mouths to breathe. They are shy, but their bite is strong. Never put your hand into a hole in the reef!",dangerSeen_seaKrait:"A striped sea snake! It's calm, but very venomous. Let it swim past.",dangerSeen_crownThorns:"A spiky crown-of-thorns starfish on the coral! Don't dive onto it.",dangerSeen_moray:"Someone is peeking out of that rock: a moray eel! Don't dive close to its hole.",dangerHit_triggerfish:"Chomp! The triggerfish is guarding its nest. Swim away sideways and flick your tail!",dangerHit_seaKrait:"Oops, the sea snake! Real ones should never be touched. Let them swim past.",dangerHit_crownThorns:"Ouch, crown-of-thorns spines! Look with your eyes only.",dangerHit_moray:"Snap! The moray guards its hole. Never put your hand into a hole in the reef.",coming_triggerfish:"A titan triggerfish! You're near its nest. Swim away sideways!",escaped_triggerfish:"Phew, you got away from the triggerfish!",friend_dugong:"Dugong family",pet_dugong:"Dugong",power_dugong:"Gentle hug: when an animal bumps you, no trash falls out of your bag",friendFact_dugong:"Dugongs are gentle sea cows that graze on seagrass, like cows in a meadow. The dugong is the state animal of the Andaman and Nicobar Islands. Only a few are left, so they need clean seagrass and quiet boats.",radhanagar:"Radhanagar Beach",elephantBeach:"Elephant Beach",barrenIsland:"Barren Island Volcano",lighthouseAndaman:"North Bay Lighthouse",havelock:"Havelock Island",andaman:"Andaman",andamanTab:"India",india:"India",portBlair:"Port Blair",andamanSea:"Andaman Sea",place_andaman:"Havelock Island, Andaman, India",surfaceHello_andaman:"Look! That's Radhanagar Beach, and a volcano far away!",recycleIntro_andaman:"In India, the kabadiwala goes from house to house buying old bottles, cans and paper, so they can be recycled!",go_andaman:"Go to India",nextOcean_andaman:"Next ocean: the Andaman Islands, India 🇮🇳",ingredient_lotus:"Lotus flower",ingredient_peacock:"Peacock feather",ingredient_conch:"Conch shell",got_lotus:"You found a lotus! It's India's national flower. It grows out of muddy ponds and still blooms clean and pretty.",got_peacock:"You found a peacock feather! The peacock is India's national bird.",got_conch:"You found a conch shell! In India, people blow big conch shells like a trumpet in temples and at celebrations.",astory0:"The whale shark carried {a} and {b} across the ocean to the Andaman Islands in India.",astory1:"Thank you, whale shark! Wow, the water is so clear and blue!",astory2:"Look at the white beach and the jungle! And so many corals!",astory3:"But the purple submarine was already here...",astory4:"Mwahaha! You followed me all the way to India? I left plenty of trash here too!",astory5:"My robots are faster than ever. Good luck, little mermaids! Mwahaha!",astory6:"Robots again! Let's clean up!",astory7:"Careful, a triggerfish guards its nest here. If it chases us, swim away sideways!",aend0:"Devil Science dropped another page as he zoomed away.",aend1:"Another page of the recipe! Lotus, peacock feather, conch shell... we're getting closer!",aend2:"Thank you, Andaman sea friends! Bye, India!",aend3:"The whale shark came back to carry them to their next adventure.",aend4:"The Andaman Sea is clean! New countries are coming in an update. Can't wait for the next sea! 🌏",top_saree:"Saree blouse",tail_lehenga:"Lehenga skirt",accessory_tikka:"Maang tikka",dress_saree:"Saree: one very long cloth, five to nine metres long! It is wrapped around the body and draped over the shoulder.",dress_lehenga:"Lehenga: a long, swirly Indian skirt, often stitched with gold and little mirrors. People wear it at weddings and festivals.",dress_tikka:"Maang tikka: a jewel that hangs on the forehead from a chain along the hair parting. Brides in India often wear one."},rh={title1:"Daisy",title2:"Coral",subtitle:"산호초의 인어들",place:"싱가포르 시스터즈 아일랜드",choose:"누구로 놀까요?",daisy:"데이지",coral:"코랄",leo:"레오",friendPick:"같이 헤엄칠 친구",play:"시작",holdToSwim:"조이스틱을 밀거나 화면을 누르고 있으면 헤엄쳐요",clean:"깨끗한 바다",complete:"바다가 깨끗해졌어요!",completeSub:"물고기, 거북이, 산호가 고맙대요!",coinsEarned:"조개 코인",nextTime:"다른 바다도 곧 열려요...",playAgain:"다시 하기",menu:"메뉴",language:"언어",sound:"소리",on:"켜기",off:"끄기",restart:"처음부터",resume:"계속하기",untangle:"가까이 있으면 그물이 풀려요!",fact_bottle:"플라스틱 병은 바다에서 450년이나 남아 있을 수 있어요!",fact_can:"캔은 몇 번이고 다시 재활용할 수 있어요!",fact_bag:"바다거북은 비닐봉지를 해파리로 착각할 수 있어요.",fact_net:"바다에 버려진 그물을 유령 그물이라고 해요. 바다 동물들이 걸려요.",devil:"데빌 사이언스",narrator:"이야기",next:"다음",skip:"건너뛰기",story0:"{a:와} {b:는} 싱가포르 시스터즈 아일랜드에서 다이빙하는 걸 좋아해요.",story1:"그런데 어느 날, 이상한 보라색 잠수함이 나타났어요...",story2:"음하하! 나는 바다 최고의 과학자, 데빌 사이언스다!",story3:"이 바다 좀 봐라! 병, 비닐, 그물... 사람들이 바다를 이렇게 더럽혔어!",story4:"그러니 너희 둘이 청소해라. 내 물약을 받아라!",story5:"어?! 내 다리가 꼬리가 됐어!",story6:"우리 인어가 됐어! 어떻게 다시 돌아가지?",story7:"바다를 청소하고 해독제 재료를 찾아라. 그래야 다시 사람이 될 수 있지! 음하하!",story8:"저기 봐! 로봇들이 바다에 쓰레기를 버리고 있어!",story9:"로봇을 잡아서 고쳐 주고, 같이 바다를 청소하자!",mission:"미션",missionClean:"쓰레기를 모두 주워 가방에 담기",missionRobots:"로봇을 잡아서 고치기",missionMap:"지도를 보고 찾아가기",missionStars:"빨리 끝내면 별 3개!",start:"시작!",watchStory:"이야기 다시 보기",fixRobot:"가까이 있으면 로봇이 고쳐져요!",robotFixed:"로봇을 고쳤어요! 이제 청소를 도와줘요.",robotsLeft:"로봇도 고쳐 주세요!",time:"시간",map:"지도",worldTab:"세계",singaporeTab:"싱가포르",busanTab:"부산",moreOceans:"다음 바다",youAreHere:"우리는 여기!",dragToSpin:"끌어서 지구를 돌려 보세요",singapore:"싱가포르",malaysia:"말레이시아",indonesia:"인도네시아",sentosa:"센토사",marinaBay:"마리나 베이",sistersIslands:"시스터즈 아일랜드",mbs:"마리나 베이 샌즈",merlion:"머라이언",flyer:"싱가포르 플라이어",stJohns:"세인트 존스 섬",oceanReef:"그레이트 배리어 리프",oceanHawaii:"하와이",oceanCaribbean:"카리브해",oceanMed:"지중해",oceanArctic:"북극해",surfaceUp:"위로",diveDown:"잠수",flick:"꼬리치기",emptyBag:"비우러 가요!",surfaceHello:"저기 봐! 싱가포르가 보여!",place_busan:"대한민국 부산 해운대",haeundae:"해운대",busan:"부산",korea:"대한민국",dongbaek:"동백섬",hwangok:"황옥공주 인어상",marineCity:"마린시티",lct:"엘시티",gwangan:"광안대교",skyCapsule:"스카이캡슐",oryukdo:"오륙도",surfaceHello_busan:"저기 봐! 해운대 해수욕장이야!",chooseOcean:"어느 바다로 갈까?",go_busan:"부산으로 가기",allOceansDone:"세 바다를 모두 구했어요! 🎉",nextCountrySoon:"새 나라는 업데이트로 찾아와요. 어느 바다일까요? 기대해 주세요! 🌏",soonOcean:"곧 만나요",bstory0:"고래상어가 {a:와} {b:를} 한국 부산 바다까지 데려다 줬어요.",bstory1:"고마워, 고래상어야! 여기가 해운대구나. 바닷물이 조금 시원해!",bstory2:"봐, 산호 대신 다시마 숲이 있어! 성게랑 불가사리도 있어!",bstory3:"그런데 아주 익숙한 보라색 잠수함이 나타났어요...",bstory4:"음하하! 또 만났구나! 부산 바다에도 쓰레기를 가득 버려 놨지!",bstory5:"다음 해독제 재료를 원한다면 이 바다도 깨끗하게 치워 봐라! 음하하!",bstory6:"로봇들이 또 쓰레기를 버리고 있어!",bstory7:"상어랑 커다란 해파리도 조심하자. 해운대 바다를 구하자!",bend0:"데블 사이언스가 도망가면서 또 쪽지를 떨어뜨렸어요.",bend1:"해독제 레시피의 다음 장이야! 다음 재료는 인도 안다만 바다에 있대!",bend2:"그럼 또 가 보자! 고마워, 부산 바다 친구들!",bend3:"고래상어가 다시 찾아와서 다음 모험으로 데려다 주기로 했어요.",bend4:"부산 바다 청소 끝! 다음은 인도 안다만 바다예요 🇮🇳",pets:"펫",petShop:"펫 가게",petShopSub:"펫마다 새로운 힘이 생겨요!",buy:"사기",owned:"함께해요!",needMore:"조개가 더 필요해요",close:"닫기",newPet:"새 친구가 같이 헤엄쳐요!",pet_seahorse:"해마",pet_dolphin:"돌고래",pet_jellyfish:"해파리",pet_turtle:"바다거북",power_seahorse:"자석: 쓰레기를 끌어와요",power_dolphin:"엄청 빠르게 헤엄쳐요",power_jellyfish:"찌릿: 로봇을 멈춰서 고치기 쉬워요",power_turtle:"보호막: 로봇이 내 근처에 쓰레기를 못 버려요",shieldBlock:"보호막! 여기엔 못 버려!",wardrobe:"꾸미기",done:"다 했어요",slot_top:"옷",slot_tail:"꼬리",slot_hairStyle:"머리",slot_hairColor:"머리색",slot_accessory:"장식",top_own:"원래 옷",top_shell:"조개 옷",top_sailor:"세일러 옷",top_heart:"하트 옷",top_sparkle:"반짝이 옷",top_kebaya:"케바야",top_hanbok:"한복 저고리",tail_own:"원래 꼬리",tail_ocean:"바다색",tail_emerald:"에메랄드",tail_purple:"보라",tail_sunset:"노을",tail_silver:"은빛",tail_rainbow:"무지개",tail_gold:"황금",tail_galaxy:"은하수",tail_batik:"바틱 사롱",tail_chima:"한복 치마",hairStyle_bun:"똥머리",hairStyle_ponytail:"포니테일",hairStyle_twin:"양갈래",hairStyle_long:"긴 생머리",hairStyle_short:"짧은 머리",hairStyle_spiky:"삐죽 머리",hairColor_brown:"갈색",hairColor_pink:"분홍",hairColor_blonde:"금발",hairColor_black:"검정",hairColor_blue:"파랑",hairColor_purple:"보라",hairColor_mint:"민트",hairColor_silver:"은색",accessory_daisy:"데이지 꽃",accessory_star:"별 핀",accessory_goggles:"물안경",accessory_none:"없음",accessory_bow:"리본",accessory_crown:"왕관",accessory_shell:"조개 핀",accessory_sunglasses:"선글라스",accessory_cap:"모자",accessory_catEars:"고양이 귀",accessory_flowers:"꽃 화관",accessory_pirate:"해적 모자",accessory_tiara:"진주 티아라",accessory_halo:"천사 링",accessory_unicorn:"유니콘 뿔",accessory_sharkHat:"상어 모자",accessory_jellyHat:"해파리 모자",accessory_orchid:"난초 꽃",accessory_daenggi:"댕기",tradDress:"여행한 나라의 전통 옷",dress_kebaya:"케바야: 꽃 수를 놓은 블라우스예요. 싱가포르와 이웃 나라에서 입어요. 페라나칸 여성들은 금 브로치 세 개로 여며요.",dress_batik:"바틱: 뜨거운 밀랍으로 그림을 그리고 물을 들인 무늬예요. 바틱 사롱은 치마처럼 둘러 입어요.",dress_orchid:"싱가포르의 나라꽃은 '반다 미스 조아킴'이라는 난초예요.",dress_hanbok:"한복: 한국의 전통 옷이에요. 윗옷은 저고리, 앞에 묶는 끈은 고름이에요. 무지개 소매는 '색동'이라고 해요.",dress_chima:"치마: 한복의 길고 넉넉한 치마예요. 노랑 저고리에 다홍치마는 옛날부터 사랑받은 차림이에요.",dress_daenggi:"댕기: 길게 땋은 머리 끝에 묶는 리본이에요. 옛날 한국 소녀들은 빨간 댕기를 했어요.",mysteryBox:"미스터리 상자",mysteryTap:"상자를 눌러서 열어 봐요!",mysteryNew:"새 아이템!",wearIt:"입어 볼래요!",later:"나중에",mysteryOnly:"미스터리 상자나 선물에서 나와요",mysteryAll:"미스터리 아이템을 모두 모았어요!",surprise:"깜짝 선물!",giftAppeared:"로봇이 고맙다고 선물을 두고 갔어요! 🎁",giftCoins:"선물 안에 조개 코인이 들어 있었어요!",newLook:"정말 예뻐요!",boss0:"뭐야?! 바다를 전부 치웠다고?!",crab1:"여기 살던 착한 칠리크랩 기억나? 내 기계로 로봇 칠리크랩을 만들어 버렸지! 덥석덥석!",crab2:"로봇 껍데기랑 등에 붙은 리모컨 상자 때문에 크랩은 내 마음대로지! 하하하!",crab3:"불쌍한 크랩! 모래에 빨간 표시가 생겼어. 저기로 집게가 내려와. 얼른 피하자!",crab4:"집게가 모래에 박히면 등에 있는 반짝이는 상자를 부딪히자. 착한 크랩으로 돌려놓자!",crabHint:"빨간 표시를 피해요! 집게가 박히면 등에 반짝이는 상자를 부딪혀요! 🦀",crabRound2:"크르릉! 이제 매운 칠리 소스를 뿜어요! 빨간 구름을 피해요! 🌶️",crabRound3:"이제 집게 두 개가 한꺼번에! 빨간 표시 두 개를 잘 봐요! 🦀🦀",crabSauce:"에취! 매운 칠리 소스! 🌶️",crabWin:"로봇 껍데기가 벗겨졌어요! 맛있어 보이는 착한 칠리크랩으로 돌아왔어요! 🦀💚",octo1:"자갈치 시장의 착한 문어? 내 기계로 로봇 문어를 만들어 버렸지!",octo2:"다리 여덟 개에 쇠 갑옷이랑 리모컨 고리를 끼웠지! 이제 문어는 내 마음대로다!",octo3:"불쌍한 문어! 모래에 빨간 표시가 생겼어. 저기로 문어 다리가 쾅 내려와. 얼른 피하자!",octo4:"다리가 지쳐서 축 늘어지면 반짝이는 고리를 부딪히자! 여덟 개를 다 풀어서 착한 문어로 돌려놓자!",octoHint:"빨간 표시를 피해요! 늘어진 다리의 반짝이는 고리를 부딪혀요! 🐙",octoRound2:"푸슉! 이제 먹물을 뿜어요! 까만 구름을 피해요! 🖤",octoRound3:"문어가 헤엄쳐서 따라와요! 마지막 다리 두 개! 🐙",octoInk:"먹물이다! 앞이 깜깜해! 🖤",octoWin:"로봇 갑옷이 벗겨졌어요! 착한 문어로 돌아와서 다리 여덟 개로 손을 흔들어요! 🐙💚",ele1:"엘리펀트 비치에서 헤엄치던 순한 코끼리? 내 기계로 로봇 코끼리를 만들어 버렸지!",ele2:"등에 있는 가마 안에 조종 상자가 있지! 돌격해라, 코끼리!",ele3:"불쌍한 코끼리! 모래에 빨간 길이 생겼어. 저기로 코끼리가 돌진해. 얼른 비키자!",ele4:"돌진하고 나면 어지러워해. 그때 등 위로 가서 반짝이는 상자를 부딪히자. 착한 코끼리로 돌려놓자!",eleHint:"빨간 길에서 비켜요! 어지러워하면 등에 반짝이는 상자를 부딪혀요! 🐘",eleRound2:"뿌우! 이제 코로 물을 뿜어요! 물 구름을 피해요! 💦",eleRound3:"이제 두 번 연달아 돌진해요! 조심해요! 🐘",eleSplash:"첨벙! 코끼리 물벼락! 💦",eleWin:"로봇 갑옷이 벗겨졌어요! 착한 코끼리로 돌아와서 신나게 물을 뿜어요! 🐘💚",devilFlee:"으으! 다음 바다에서 두고 보자!",ingredientHint:"금빛을 따라가요! ✨",ingredientAppeared:"해독제 재료가 나타났어요! 금빛을 따라가요 ✨",ingredient_seagrape:"바다포도",ingredient_pearl:"대왕조개 진주",ingredient_rainbowCoral:"무지개 산호",ingredient_kelp:"다시마",ingredient_camellia:"동백꽃",ingredient_feather:"갈매기 깃털",got_kelp:"다시마를 찾았어요! 우리 바다의 다시마 숲은 물고기들의 집이에요.",got_camellia:"동백꽃을 찾았어요! 부산을 상징하는 꽃이고 동백섬에 피어요.",got_feather:"갈매기 깃털을 찾았어요! 갈매기는 부산을 상징하는 새예요.",got_seagrape:"바다포도를 찾았어요! 싱가포르 바다에서 정말 자라는 해초예요.",got_pearl:"진주를 찾았어요! 시스터즈 아일랜드에는 대왕조개가 살아요.",got_rainbowCoral:"무지개 산호를 찾았어요! 건강한 산호는 알록달록해요.",lab:"물약 실험실",tempPotion:"임시 물약",tempPotionSub:"재료 하나로 잠깐 사람이 될 수 있어요!",noIngredients:"먼저 금빛 아래에서 재료를 찾아요!",stirIt:"솥을 톡톡 눌러서 저어요!",drink:"마시기!",alreadyHuman:"지금 사람이에요!",antidote:"진짜 해독제",antidoteSub:"모든 바다의 재료를 모으면 영원히 사람으로 돌아갈 수 있어요!",humanStart:"사람이 됐어요! 잠깐 동안만...",humanEnd:"앗! 물약이 끝났어요. 진짜 해독제가 필요해요!",missionIngredients:"금빛 속 해독제 재료 찾기",missionRescue:"곤경에 빠진 바다 동물 구하기",missionRecycle:"가방 속 쓰레기를 재활용해서 코인 받기",bagFull:"가방이 꽉 찼어요! 재활용 코너로 가요 ♻️",recycle:"가방을 재활용 코너로 가져가요 ♻️",rescue:"가까이 있으면 구해 줄 수 있어요!",escort:"길 잃은 흰동가리를 말미잘 집에 데려다 줘요! 🏠",escortOctopus:"길 잃은 아기 문어를 바위 굴 집에 데려다 줘요! 🏠",findShell:"이 소라게는 캔 속에 살아요! 진짜 껍데기를 찾아 줘요.",bringShell:"껍데기를 소라게에게 가져다 줘요!",animalsLeft:"아직 도움이 필요한 동물이 있어요! 💗",recycleTitle:"재활용 코너",bin_machine:"병·캔 자판기",bin_blue:"비닐 (파란 통)",bin_nets:"헌 그물",refund:"돌려받은 돈",recycleIntro_busan:"한국에서도 페트병과 캔을 무인 회수기에 넣으면 포인트를 돌려받아요! 투명 페트병은 라벨을 떼고 따로 모아요.",recycleIntro:"싱가포르에서는 빈 음료수 병이나 캔을 재활용 자판기에 넣으면 10센트를 돌려받아요!",recycleDone:"분리수거 끝! 정말 잘했어요!",recycleFact_machine:"헌 페트병은 새 병이나 티셔츠로 다시 태어나요!",recycleFact_can:"재활용한 캔은 약 60일이면 새 캔이 되어 가게에 돌아와요!",recycleFact_nets:"낡은 그물은 수영복이나 카펫으로 변신해요!",keepSwimming:"계속 헤엄치기",totalRefund:"지금까지 돌려받은 돈",album:"구조 도감",albumSub:"내가 구한 바다 동물들",notYet:"아직 못 만났어요",animal_turtle:"바다거북",animal_fish:"파란 물고기",animal_seahorse:"해마",animal_clownfish:"흰동가리",animal_crab:"소라게",animal_octopus:"아기 문어",rescued_octopus:"아기 문어가 집에 왔어요! 문어는 바위 굴에 숨고 몸 색깔을 바꿀 수 있어요.",rescued_turtle:"바다거북을 구했어요! 매부리바다거북은 싱가포르 섬에 알을 낳아요.",rescued_fish:"물고기를 구했어요! 물고기가 비닐봉지에 갇힐 수 있어요.",rescued_seahorse:"해마를 구했어요! 해마는 아빠가 주머니에 아기를 품어요.",rescued_clownfish:"흰동가리가 집에 왔어요! 흰동가리는 말미잘 속에 안전하게 숨어요.",rescued_crab:"소라게에게 새 집이 생겼어요! 소라게가 쓰레기를 껍데기로 쓰기도 해요.",safetyCards:"바다 안전 카드",secretFriends:"숨은 친구",secretHint:"어딘가에 누가 숨어 있어요...",secretFound:"숨은 친구를 찾았어요!",comeAlong:"같이 가자!",danger_crocodile:"바다악어",danger_boxJelly:"상자해파리",danger_lionfish:"쏠배감펭",danger_stonefish:"스톤피시",dangerFact_crocodile:"가장 큰 파충류이고 바다에서도 헤엄쳐요. 2026년에 센토사 해변에도 나타났어요. 악어를 보면 물에서 나와 멀리 떨어져요.",dangerFact_boxJelly:"네모나고 투명한 해파리예요. 긴 촉수에 독이 있어요. 2026년 센토사 근처에서 새로운 종류가 발견됐어요. 쏘이면 어른에게 알리고 식초를 부어요.",dangerFact_lionfish:"줄무늬와 부채 같은 지느러미가 예쁘지만 가시에 독이 있어요. 눈으로만 봐요!",dangerFact_stonefish:"바닥의 돌과 똑같이 생겼고 등에 독가시가 있어요. 바다에서는 아쿠아슈즈를 신고 돌을 밟지 않아요.",dangerSeen_boxJelly:"조심! 상자해파리예요. 돌아서 가요.",dangerSeen_lionfish:"쏠배감펭이에요! 예쁘지만 가시에 찔려요. 눈으로만 봐요!",dangerSeen_stonefish:"저 돌에 눈이 있어요! 스톤피시가 바닥에 숨어 있어요. 그 위로 잠수하지 마요!",dangerHit_crocodile:"앙! 악어에게 부딪혔어요. 빨리 헤엄치고 꼬리치기를 써요!",dangerHit_boxJelly:"앗 따가워, 상자해파리! 진짜로 쏘이면 식초와 어른의 도움이 필요해요.",dangerHit_lionfish:"앗 따가워, 쏠배감펭 가시! 눈으로만 봐요.",dangerHit_stonefish:"앗, 스톤피시! 돌인 줄 알았어요.",spilled:"가방에서 쓰레기가 조금 떨어졌어요. 다시 주워요!",coming_crocodile:"악어가 나타났어요! 빨리 헤엄쳐요!",escaped_crocodile:"휴, 악어를 피했어요!",danger_mako:"청상아리",danger_nomura:"노무라입깃해파리",danger_blueRing:"파란고리문어",danger_stingray:"노랑가오리",dangerFact_mako:'세상에서 가장 빠른 상어 중 하나예요. 우리나라 바다에도 가끔 나타나요. 안전요원이 "상어!"라고 하면 침착하게 빨리 물 밖으로 나와요.',dangerFact_nomura:"세계에서 가장 큰 해파리 중 하나로, 어른 키보다 더 커요! 여름이면 우리 바다로 떠내려와서 해운대에 해파리 차단 그물을 쳐요. 모래 위에 죽어 있는 것도 쏠 수 있으니 만지지 마요.",dangerFact_blueRing:"작고 귀엽지만 바다에서 가장 독이 강한 동물 중 하나예요. 요즘은 부산 갯바위에서도 발견돼요. 작은 문어라도 절대 손으로 잡지 마요.",dangerFact_stingray:"모래 속에 납작하게 숨어 있고 꼬리에 독가시가 있어요. 얕은 물에서는 발을 끌면서 걸으면 가오리가 먼저 도망가요.",dangerSeen_nomura:"우와, 커다란 노무라입깃해파리! 촉수에서 멀리 떨어져요.",dangerSeen_blueRing:"파란 고리가 있는 작은 문어! 독이 아주 강해요. 그 위로 잠수하지 마요!",dangerSeen_stingray:"모래 위를 미끄러지는 가오리예요. 꼬리에 가시가 있어요. 위로 지나가요!",dangerHit_mako:"휙! 청상아리에게 부딪혔어요. 꼬리치기로 더 빨리!",dangerHit_nomura:"앗 따가워, 해파리! 진짜로 쏘이면 물 밖으로 나와 어른에게 알려요.",dangerHit_blueRing:"앗, 파란고리문어! 진짜 문어는 절대 만지면 안 돼요.",dangerHit_stingray:"앗 따가워, 가오리 꼬리! 얕은 물에선 발을 끌며 걸어요.",coming_mako:"청상아리가 나타났어요! 빨리 헤엄쳐요!",escaped_mako:"휴, 청상아리를 피했어요!",newSafetyCard:"도감에 새 카드가 생겼어요!",friend_porpoise:"상괭이 가족",pet_porpoise:"상괭이",power_porpoise:"음파 탐지: 딸깍딸깍 소리로 가까운 쓰레기를 찾아 줘요",friendFact_porpoise:"웃는 얼굴의 우리 바다 돌고래, 상괭이는 등지느러미가 없어요. 부산 바다에도 살아요. 바다가 깨끗하고 버려진 그물이 줄어야 안전하게 살 수 있어요.",friend_otter:"수달 가족",pet_otter:"수달",power_otter:"물어오기: 근처 쓰레기를 물어다 줘요",friendFact_otter:"싱가포르 수달 가족은 마리나 베이와 머라이언 공원에 놀러 와요. 강이 깨끗해지자 다시 돌아왔어요!",end0:"데블 사이언스가 도망가면서 잠수함에서 쪽지 하나가 팔랑팔랑 떨어졌어요.",end1:"해독제 레시피야! 다음 재료는 한국 부산 바다에 있대!",end2:"부산? 해운대 바다가 있는 곳이잖아! 그런데 너무 멀어...",end3:"그때 커다란 고래상어가 다가왔어요. 바다에서 제일 큰 물고기인데 아주 순해요!",end4:"친구가 된 로봇들과 바다 친구들이 손을 흔들어요. 고마워, {a}! 고마워, {b}!",end5:"고래상어야, 우리를 부산까지 데려다 줄래?",end6:"싱가포르 바다 청소 끝! 다음 모험: 한국 부산 해운대 🇰🇷",nextOcean_busan:"다음 바다: 한국 부산 해운대 🇰🇷",login:"로그인",logout:"로그아웃",deleteAccount:"계정 지우기",deleteWarn:"이 플레이어와 인터넷에 저장된 기록(코인, 옷, 펫, 바다)이 모두 지워져요. 다시 되돌릴 수 없어요.",deletePin:"지우려면 비밀 그림 4개를 다시 눌러요.",keepAccount:"안 지울래요",accountDeleted:"계정을 지웠어요. 안녕!",whoAreYou:"이름이 뭐예요?",namePlaceholder:"이름",pickPin:"비밀 그림 4개를 눌러요",pinHelp:"꼭 기억해요. 다른 아이패드에서도 이 그림으로 들어가요.",newPlayer:"처음 왔나요? 이 이름으로 새로 시작할까요?",yesNew:"네, 새로 시작",tryAgain:"다시 하기",wrongPin:"비밀 그림이 달라요. 다시 해 봐요!",busy:"너무 많이 했어요. 조금 쉬었다가 다시 해요.",offline:"인터넷에 연결할 수 없어요. 와이파이를 확인해요.",hello:"안녕",savedOnline:"게임 기록이 인터넷에 저장돼서 어느 아이패드에서든 이어서 해요.",coop:"같이 하기",makeRoom:"방 만들기",joinRoom:"방 들어가기",tellFriend:"친구에게 이 그림 3개를 알려 줘요",waitingFriend:"친구를 기다리는 중...",friendIn:"들어왔어요!",pickRoom:"방 그림 3개를 눌러요",noRoom:"그 그림의 방이 없어요.",roomFull:"그 방은 꽉 찼어요.",joined:"들어왔어요! 친구가 시작을 누르면 같이 시작해요.",waitHost:"친구가 게임을 시작해요",friendLeft:"친구가 나갔어요. 계속 헤엄쳐요!",leaveRoom:"방 나가기",needLogin:"같이 하려면 먼저 로그인해요",together:"같이",andaman:"안다만",danger_triggerfish:"타이탄 트리거피시",danger_seaKrait:"줄무늬 바다뱀",danger_crownThorns:"악마불가사리",danger_moray:"자이언트 곰치",dangerFact_triggerfish:"튼튼한 앞니를 가진 커다란 산호초 물고기예요. 모래 위 둥지를 지키느라 가까이 오는 사람을 쫓아와요. 지키는 구역이 거꾸로 선 고깔 모양이라서, 위로 말고 옆으로 헤엄쳐 멀어져요!",dangerFact_seaKrait:"검은색과 푸른 회색 줄무늬가 있는 바다뱀이에요. 독이 아주 강하지만 순하고 부끄럼이 많아요. 절대 만지지 말고, 가만히 있으면서 지나가게 해 줘요.",dangerFact_crownThorns:"날카로운 독가시로 덮인 커다란 불가사리예요. 산호를 먹어서 너무 많아지면 산호초가 아파요. 절대 만지지 말고, 많이 보이면 어른이나 다이빙 선생님에게 알려요.",dangerFact_moray:"곰치는 바위 구멍에 숨어 살고, 숨을 쉬려고 입을 뻐끔뻐끔 열었다 닫아요. 겁이 많지만 무는 힘이 아주 세요. 산호초 구멍에는 절대 손을 넣지 마요!",dangerSeen_seaKrait:"줄무늬 바다뱀이에요! 순하지만 독이 아주 강해요. 지나가게 해 줘요.",dangerSeen_crownThorns:"산호 위에 가시투성이 악마불가사리! 그 위로 잠수하지 마요.",dangerSeen_moray:"바위에서 누가 빼꼼 내다봐요. 곰치예요! 구멍 가까이 잠수하지 마요.",dangerHit_triggerfish:"앙! 트리거피시가 둥지를 지키고 있어요. 옆으로 헤엄치고 꼬리치기를 써요!",dangerHit_seaKrait:"앗, 바다뱀! 진짜 바다뱀은 절대 만지면 안 돼요. 지나가게 해 줘요.",dangerHit_crownThorns:"앗 따가워, 악마불가사리 가시! 눈으로만 봐요.",dangerHit_moray:"앙! 곰치가 집을 지키고 있어요. 바위 구멍에는 절대 손을 넣지 마요.",coming_triggerfish:"타이탄 트리거피시예요! 둥지 근처예요. 옆으로 헤엄쳐요!",escaped_triggerfish:"휴, 트리거피시를 피했어요!",friend_dugong:"듀공 가족",pet_dugong:"듀공",power_dugong:"포근하게 안아 주기: 동물에게 부딪혀도 가방에서 쓰레기가 안 떨어져요",friendFact_dugong:"듀공은 풀밭의 소처럼 바닷속 잘피(해초)를 뜯어 먹는 순한 바다소예요. 안다만 니코바르 제도를 대표하는 동물이에요. 이제 얼마 남지 않아서 깨끗한 해초밭과 조용한 배가 필요해요.",radhanagar:"라다나가르 해변",elephantBeach:"코끼리 해변",barrenIsland:"배런섬 화산",lighthouseAndaman:"노스베이 등대",havelock:"하브록섬",andamanTab:"인도",india:"인도",portBlair:"포트블레어",andamanSea:"안다만해",place_andaman:"인도 안다만 제도 하브록섬",surfaceHello_andaman:"저기 봐! 라다나가르 해변이야! 저 멀리 화산도 보여!",recycleIntro_andaman:"인도에서는 '카바디왈라'가 집집마다 다니며 빈 병, 캔, 종이를 사 가서 재활용해요!",go_andaman:"인도로 가기",nextOcean_andaman:"다음 바다: 인도 안다만 제도 🇮🇳",ingredient_lotus:"연꽃",ingredient_peacock:"공작 깃털",ingredient_conch:"소라고둥",got_lotus:"연꽃을 찾았어요! 인도의 나라꽃이에요. 진흙 연못에서 자라도 깨끗하고 예쁘게 피어요.",got_peacock:"공작 깃털을 찾았어요! 공작은 인도의 나라새예요.",got_conch:"소라고둥을 찾았어요! 인도에서는 큰 소라고둥을 나팔처럼 불어요. 사원이나 축제 때 들을 수 있어요.",astory0:"고래상어가 {a:와} {b:를} 바다 건너 인도 안다만 제도까지 데려다 줬어요.",astory1:"고마워, 고래상어야! 와, 물이 정말 맑고 파래!",astory2:"하얀 모래사장이랑 정글 좀 봐! 산호도 엄청 많아!",astory3:"그런데 보라색 잠수함이 벌써 와 있었어요...",astory4:"음하하! 인도까지 따라왔구나? 여기에도 쓰레기를 잔뜩 버려 놨지!",astory5:"내 로봇들은 더 빨라졌다고. 잘해 봐라, 꼬마 인어들아! 음하하!",astory6:"로봇들이 또 왔어! 같이 치우자!",astory7:"조심해, 여기엔 둥지를 지키는 트리거피시가 있대. 쫓아오면 옆으로 헤엄쳐서 피하자!",aend0:"데블 사이언스가 도망가면서 또 쪽지를 떨어뜨렸어요.",aend1:"레시피의 다음 장이야! 연꽃, 공작 깃털, 소라고둥... 거의 다 와 가!",aend2:"고마워, 안다만 바다 친구들! 안녕, 인도!",aend3:"고래상어가 다시 찾아와서 다음 모험으로 데려다 주기로 했어요.",aend4:"안다만 바다 청소 끝! 새 나라는 업데이트로 찾아와요. 다음 바다를 기대해 주세요! 🌏",top_saree:"사리 블라우스",tail_lehenga:"렝가 치마",accessory_tikka:"망 티카",dress_saree:"사리: 아주 긴 천 한 장이에요. 길이가 5~9미터나 돼요! 몸에 둘러 감고 끝자락을 어깨 위로 넘겨 입어요.",dress_lehenga:"렝가: 빙글빙글 퍼지는 인도의 긴 치마예요. 금실 수와 작은 거울 장식이 많고, 결혼식이나 축제 때 입어요.",dress_tikka:"망 티카: 가르마를 따라 늘어뜨려 이마에 거는 보석이에요. 인도의 신부들이 많이 해요."},sh={en:ih,ko:rh};let ko="en";function Ng(i){ko=i,document.documentElement.lang=i,document.querySelectorAll("[data-i18n]").forEach(e=>{e.textContent=Ol(e.dataset.i18n)})}function ns(){return ko}function Ol(i){return sh[ko][i]}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fo="170",oh=0,la=1,ah=2,Hl=1,lh=2,gn=3,zn=0,Ft=1,on=2,Dn=0,bi=1,ca=2,ha=3,da=4,ch=5,jn=100,hh=101,dh=102,uh=103,fh=104,ph=200,mh=201,gh=202,_h=203,Xs=204,qs=205,xh=206,yh=207,vh=208,Sh=209,wh=210,Mh=211,bh=212,Eh=213,Th=214,Ks=0,js=1,$s=2,Ri=3,Zs=4,Js=5,Qs=6,eo=7,is=0,Ah=1,Rh=2,Un=0,Ch=1,Ph=2,Lh=3,Ih=4,Dh=5,Uh=6,zh=7,Bl=300,Ci=301,Pi=302,to=303,no=304,rs=306,$r=1e3,Zn=1001,io=1002,wt=1003,Gl=1004,hr=1005,an=1006,hs=1007,Jn=1008,vn=1009,Vl=1010,Wl=1011,nr=1012,Oo=1013,Qn=1014,ln=1015,rr=1016,Ho=1017,Bo=1018,Li=1020,Yl=35902,Xl=1021,ql=1022,en=1023,Kl=1024,jl=1025,Ei=1026,Ii=1027,Go=1028,Vo=1029,$l=1030,Wo=1031,Yo=1033,Gr=33776,Vr=33777,Wr=33778,Yr=33779,ro=35840,so=35841,oo=35842,ao=35843,lo=36196,co=37492,ho=37496,uo=37808,fo=37809,po=37810,mo=37811,go=37812,_o=37813,xo=37814,yo=37815,vo=37816,So=37817,wo=37818,Mo=37819,bo=37820,Eo=37821,Xr=36492,To=36494,Ao=36495,Zl=36283,Ro=36284,Co=36285,Po=36286,Nh=3200,kh=3201,ss=0,Fh=1,In="",Rt="srgb",Ui="srgb-linear",os="linear",nt="srgb",ni=7680,ua=519,Oh=512,Hh=513,Bh=514,Jl=515,Gh=516,Vh=517,Wh=518,Yh=519,Lo=35044,fa="300 es",_n=2e3,Zr=2001;class zi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pa=1234567;const er=Math.PI/180,ir=180/Math.PI;function xn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}function Ut(i,e,t){return Math.max(e,Math.min(t,i))}function Xo(i,e){return(i%e+e)%e}function Xh(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function qh(i,e,t){return i!==e?(t-i)/(e-i):0}function tr(i,e,t){return(1-t)*i+t*e}function Kh(i,e,t,n){return tr(i,e,1-Math.exp(-t*n))}function jh(i,e=1){return e-Math.abs(Xo(i,e*2)-e)}function $h(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Zh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Jh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Qh(i,e){return i+Math.random()*(e-i)}function ed(i){return i*(.5-Math.random())}function td(i){i!==void 0&&(pa=i);let e=pa+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function nd(i){return i*er}function id(i){return i*ir}function rd(i){return(i&i-1)===0&&i!==0}function sd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function od(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ad(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),d=s((e-n)/2),u=a((e-n)/2),p=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Qt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function tt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ld={DEG2RAD:er,RAD2DEG:ir,generateUUID:xn,clamp:Ut,euclideanModulo:Xo,mapLinear:Xh,inverseLerp:qh,lerp:tr,damp:Kh,pingpong:jh,smoothstep:$h,smootherstep:Zh,randInt:Jh,randFloat:Qh,randFloatSpread:ed,seededRandom:td,degToRad:nd,radToDeg:id,isPowerOfTwo:rd,ceilPowerOfTwo:sd,floorPowerOfTwo:od,setQuaternionFromProperEuler:ad,normalize:tt,denormalize:Qt};class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ne{constructor(e,t,n,r,s,a,o,l,c){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],x=r[0],m=r[3],f=r[6],E=r[1],b=r[4],S=r[7],z=r[2],T=r[5],R=r[8];return s[0]=a*x+o*E+l*z,s[3]=a*m+o*b+l*T,s[6]=a*f+o*S+l*R,s[1]=c*x+h*E+d*z,s[4]=c*m+h*b+d*T,s[7]=c*f+h*S+d*R,s[2]=u*x+p*E+g*z,s[5]=u*m+p*b+g*T,s[8]=u*f+p*S+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*s,p=c*s-a*l,g=t*d+n*u+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=d*x,e[1]=(r*c-h*n)*x,e[2]=(o*n-r*a)*x,e[3]=u*x,e[4]=(h*t-r*l)*x,e[5]=(r*s-o*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ds.makeScale(e,t)),this}rotate(e){return this.premultiply(ds.makeRotation(-e)),this}translate(e,t){return this.premultiply(ds.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ds=new Ne;function Ql(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Jr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cd(){const i=Jr("canvas");return i.style.display="block",i}const ma={};function Ji(i){i in ma||(ma[i]=!0,console.warn(i))}function hd(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function dd(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ud(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const je={enabled:!0,workingColorSpace:Ui,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===nt&&(i.r=yn(i.r),i.g=yn(i.g),i.b=yn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===nt&&(i.r=Ti(i.r),i.g=Ti(i.g),i.b=Ti(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===In?os:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ti(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const ga=[.64,.33,.3,.6,.15,.06],_a=[.2126,.7152,.0722],xa=[.3127,.329],ya=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),va=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);je.define({[Ui]:{primaries:ga,whitePoint:xa,transfer:os,toXYZ:ya,fromXYZ:va,luminanceCoefficients:_a,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:ga,whitePoint:xa,transfer:nt,toXYZ:ya,fromXYZ:va,luminanceCoefficients:_a,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}});let ii;class fd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ii===void 0&&(ii=Jr("canvas")),ii.width=e.width,ii.height=e.height;const n=ii.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ii}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Jr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=yn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(yn(t[n]/255)*255):t[n]=yn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pd=0;class ec{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=xn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(us(r[a].image)):s.push(us(r[a]))}else s=us(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function us(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let md=0;class Ct extends zi{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,n=Zn,r=Zn,s=an,a=Jn,o=en,l=vn,c=Ct.DEFAULT_ANISOTROPY,h=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=xn(),this.name="",this.source=new ec(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $r:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case io:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $r:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case io:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=Bl;Ct.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,n=0,r=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,S=(p+1)/2,z=(f+1)/2,T=(h+u)/4,R=(d+x)/4,U=(g+m)/4;return b>S&&b>z?b<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(b),r=T/n,s=R/n):S>z?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=T/r,s=U/r):z<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(z),n=R/s,r=U/s),this.set(n,r,s,t),this}let E=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(d-x)/E,this.z=(u-h)/E,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gd extends zi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Ct(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ec(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nn extends gd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class tc extends Ct{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=wt,this.minFilter=wt,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _d extends Ct{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=wt,this.minFilter=wt,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ni{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],d=n[r+3];const u=s[a+0],p=s[a+1],g=s[a+2],x=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(d!==x||l!==u||c!==p||h!==g){let m=1-o;const f=l*u+c*p+h*g+d*x,E=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){const z=Math.sqrt(b),T=Math.atan2(z,f*E);m=Math.sin(m*T)/z,o=Math.sin(o*T)/z}const S=o*E;if(l=l*m+u*S,c=c*m+p*S,h=h*m+g*S,d=d*m+x*S,m===1-o){const z=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=z,c*=z,h*=z,d*=z}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],d=s[a],u=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+h*d+l*p-c*u,e[t+1]=l*g+h*u+c*d-o*p,e[t+2]=c*g+h*p+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),d=o(s/2),u=l(n/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=r*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),h=2*(o*t-s*r),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-s*d,this.z=r+l*d+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return fs.copy(this).projectOnVector(e),this.sub(fs)}reflect(e){return this.sub(fs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fs=new C,Sa=new Ni;class Fn{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($t.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($t.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=$t.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,$t):$t.fromBufferAttribute(s,a),$t.applyMatrix4(e.matrixWorld),this.expandByPoint($t);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),dr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),dr.copy(n.boundingBox)),dr.applyMatrix4(e.matrixWorld),this.union(dr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$t),$t.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bi),ur.subVectors(this.max,Bi),ri.subVectors(e.a,Bi),si.subVectors(e.b,Bi),oi.subVectors(e.c,Bi),En.subVectors(si,ri),Tn.subVectors(oi,si),Hn.subVectors(ri,oi);let t=[0,-En.z,En.y,0,-Tn.z,Tn.y,0,-Hn.z,Hn.y,En.z,0,-En.x,Tn.z,0,-Tn.x,Hn.z,0,-Hn.x,-En.y,En.x,0,-Tn.y,Tn.x,0,-Hn.y,Hn.x,0];return!ps(t,ri,si,oi,ur)||(t=[1,0,0,0,1,0,0,0,1],!ps(t,ri,si,oi,ur))?!1:(fr.crossVectors(En,Tn),t=[fr.x,fr.y,fr.z],ps(t,ri,si,oi,ur))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$t).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($t).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const dn=[new C,new C,new C,new C,new C,new C,new C,new C],$t=new C,dr=new Fn,ri=new C,si=new C,oi=new C,En=new C,Tn=new C,Hn=new C,Bi=new C,ur=new C,fr=new C,Bn=new C;function ps(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Bn.fromArray(i,s);const o=r.x*Math.abs(Bn.x)+r.y*Math.abs(Bn.y)+r.z*Math.abs(Bn.z),l=e.dot(Bn),c=t.dot(Bn),h=n.dot(Bn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const xd=new Fn,Gi=new C,ms=new C;class ki{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):xd.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gi.subVectors(e,this.center);const t=Gi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Gi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ms.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gi.copy(e.center).add(ms)),this.expandByPoint(Gi.copy(e.center).sub(ms))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const un=new C,gs=new C,pr=new C,An=new C,_s=new C,mr=new C,xs=new C;class nc{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(un.copy(this.origin).addScaledVector(this.direction,t),un.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){gs.copy(e).add(t).multiplyScalar(.5),pr.copy(t).sub(e).normalize(),An.copy(this.origin).sub(gs);const s=e.distanceTo(t)*.5,a=-this.direction.dot(pr),o=An.dot(this.direction),l=-An.dot(pr),c=An.lengthSq(),h=Math.abs(1-a*a);let d,u,p,g;if(h>0)if(d=a*l-o,u=a*o-l,g=s*h,d>=0)if(u>=-g)if(u<=g){const x=1/h;d*=x,u*=x,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(gs).addScaledVector(pr,u),p}intersectSphere(e,t){un.subVectors(e.center,this.origin);const n=un.dot(this.direction),r=un.dot(un)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,un)!==null}intersectTriangle(e,t,n,r,s){_s.subVectors(t,e),mr.subVectors(n,e),xs.crossVectors(_s,mr);let a=this.direction.dot(xs),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;An.subVectors(this.origin,e);const l=o*this.direction.dot(mr.crossVectors(An,mr));if(l<0)return null;const c=o*this.direction.dot(_s.cross(An));if(c<0||l+c>a)return null;const h=-o*An.dot(xs);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ze{constructor(e,t,n,r,s,a,o,l,c,h,d,u,p,g,x,m){Ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,h,d,u,p,g,x,m)}set(e,t,n,r,s,a,o,l,c,h,d,u,p,g,x,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ze().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/ai.setFromMatrixColumn(e,0).length(),s=1/ai.setFromMatrixColumn(e,1).length(),a=1/ai.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=a*h,p=a*d,g=o*h,x=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=u-x*c,t[9]=-o*l,t[2]=x-u*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,p=l*d,g=c*h,x=c*d;t[0]=u+x*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=x+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,p=l*d,g=c*h,x=c*d;t[0]=u-x*o,t[4]=-a*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=x-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,p=a*d,g=o*h,x=o*d;t[0]=l*h,t[4]=g*c-p,t[8]=u*c+x,t[1]=l*d,t[5]=x*c+u,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,p=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-u*d,t[8]=g*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+g,t[10]=u-x*d}else if(e.order==="XZY"){const u=a*l,p=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+x,t[5]=a*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yd,e,vd)}lookAt(e,t,n){const r=this.elements;return Bt.subVectors(e,t),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),Rn.crossVectors(n,Bt),Rn.lengthSq()===0&&(Math.abs(n.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),Rn.crossVectors(n,Bt)),Rn.normalize(),gr.crossVectors(Bt,Rn),r[0]=Rn.x,r[4]=gr.x,r[8]=Bt.x,r[1]=Rn.y,r[5]=gr.y,r[9]=Bt.y,r[2]=Rn.z,r[6]=gr.z,r[10]=Bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],x=n[6],m=n[10],f=n[14],E=n[3],b=n[7],S=n[11],z=n[15],T=r[0],R=r[4],U=r[8],w=r[12],y=r[1],A=r[5],B=r[9],N=r[13],H=r[2],q=r[6],W=r[10],ee=r[14],V=r[3],se=r[7],ue=r[11],we=r[15];return s[0]=a*T+o*y+l*H+c*V,s[4]=a*R+o*A+l*q+c*se,s[8]=a*U+o*B+l*W+c*ue,s[12]=a*w+o*N+l*ee+c*we,s[1]=h*T+d*y+u*H+p*V,s[5]=h*R+d*A+u*q+p*se,s[9]=h*U+d*B+u*W+p*ue,s[13]=h*w+d*N+u*ee+p*we,s[2]=g*T+x*y+m*H+f*V,s[6]=g*R+x*A+m*q+f*se,s[10]=g*U+x*B+m*W+f*ue,s[14]=g*w+x*N+m*ee+f*we,s[3]=E*T+b*y+S*H+z*V,s[7]=E*R+b*A+S*q+z*se,s[11]=E*U+b*B+S*W+z*ue,s[15]=E*w+b*N+S*ee+z*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14],g=e[3],x=e[7],m=e[11],f=e[15];return g*(+s*l*d-r*c*d-s*o*u+n*c*u+r*o*p-n*l*p)+x*(+t*l*p-t*c*u+s*a*u-r*a*p+r*c*h-s*l*h)+m*(+t*c*d-t*o*p-s*a*d+n*a*p+s*o*h-n*c*h)+f*(-r*o*h-t*l*d+t*o*u+r*a*d-n*a*u+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],g=e[12],x=e[13],m=e[14],f=e[15],E=d*m*c-x*u*c+x*l*p-o*m*p-d*l*f+o*u*f,b=g*u*c-h*m*c-g*l*p+a*m*p+h*l*f-a*u*f,S=h*x*c-g*d*c+g*o*p-a*x*p-h*o*f+a*d*f,z=g*d*l-h*x*l-g*o*u+a*x*u+h*o*m-a*d*m,T=t*E+n*b+r*S+s*z;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=E*R,e[1]=(x*u*s-d*m*s-x*r*p+n*m*p+d*r*f-n*u*f)*R,e[2]=(o*m*s-x*l*s+x*r*c-n*m*c-o*r*f+n*l*f)*R,e[3]=(d*l*s-o*u*s-d*r*c+n*u*c+o*r*p-n*l*p)*R,e[4]=b*R,e[5]=(h*m*s-g*u*s+g*r*p-t*m*p-h*r*f+t*u*f)*R,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*f-t*l*f)*R,e[7]=(a*u*s-h*l*s+h*r*c-t*u*c-a*r*p+t*l*p)*R,e[8]=S*R,e[9]=(g*d*s-h*x*s-g*n*p+t*x*p+h*n*f-t*d*f)*R,e[10]=(a*x*s-g*o*s+g*n*c-t*x*c-a*n*f+t*o*f)*R,e[11]=(h*o*s-a*d*s-h*n*c+t*d*c+a*n*p-t*o*p)*R,e[12]=z*R,e[13]=(h*x*r-g*d*r+g*n*u-t*x*u-h*n*m+t*d*m)*R,e[14]=(g*o*r-a*x*r-g*n*l+t*x*l+a*n*m-t*o*m)*R,e[15]=(a*d*r-h*o*r+h*n*l-t*d*l-a*n*u+t*o*u)*R,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,d=o+o,u=s*c,p=s*h,g=s*d,x=a*h,m=a*d,f=o*d,E=l*c,b=l*h,S=l*d,z=n.x,T=n.y,R=n.z;return r[0]=(1-(x+f))*z,r[1]=(p+S)*z,r[2]=(g-b)*z,r[3]=0,r[4]=(p-S)*T,r[5]=(1-(u+f))*T,r[6]=(m+E)*T,r[7]=0,r[8]=(g+b)*R,r[9]=(m-E)*R,r[10]=(1-(u+x))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=ai.set(r[0],r[1],r[2]).length();const a=ai.set(r[4],r[5],r[6]).length(),o=ai.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Zt.copy(this);const c=1/s,h=1/a,d=1/o;return Zt.elements[0]*=c,Zt.elements[1]*=c,Zt.elements[2]*=c,Zt.elements[4]*=h,Zt.elements[5]*=h,Zt.elements[6]*=h,Zt.elements[8]*=d,Zt.elements[9]*=d,Zt.elements[10]*=d,t.setFromRotationMatrix(Zt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=_n){const l=this.elements,c=2*s/(t-e),h=2*s/(n-r),d=(t+e)/(t-e),u=(n+r)/(n-r);let p,g;if(o===_n)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Zr)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=_n){const l=this.elements,c=1/(t-e),h=1/(n-r),d=1/(a-s),u=(t+e)*c,p=(n+r)*h;let g,x;if(o===_n)g=(a+s)*d,x=-2*d;else if(o===Zr)g=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ai=new C,Zt=new Ze,yd=new C(0,0,0),vd=new C(1,1,1),Rn=new C,gr=new C,Bt=new C,wa=new Ze,Ma=new Ni;class zt{constructor(e=0,t=0,n=0,r=zt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],d=r[2],u=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ut(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ma.setFromEuler(this),this.setFromQuaternion(Ma,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zt.DEFAULT_ORDER="XYZ";class ic{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sd=0;const ba=new C,li=new Ni,fn=new Ze,_r=new C,Vi=new C,wd=new C,Md=new Ni,Ea=new C(1,0,0),Ta=new C(0,1,0),Aa=new C(0,0,1),Ra={type:"added"},bd={type:"removed"},ci={type:"childadded",child:null},ys={type:"childremoved",child:null};class xt extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new C,t=new zt,n=new Ni,r=new C(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ze},normalMatrix:{value:new Ne}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ic,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return li.setFromAxisAngle(e,t),this.quaternion.multiply(li),this}rotateOnWorldAxis(e,t){return li.setFromAxisAngle(e,t),this.quaternion.premultiply(li),this}rotateX(e){return this.rotateOnAxis(Ea,e)}rotateY(e){return this.rotateOnAxis(Ta,e)}rotateZ(e){return this.rotateOnAxis(Aa,e)}translateOnAxis(e,t){return ba.copy(e).applyQuaternion(this.quaternion),this.position.add(ba.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ea,e)}translateY(e){return this.translateOnAxis(Ta,e)}translateZ(e){return this.translateOnAxis(Aa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_r.copy(e):_r.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Vi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(Vi,_r,this.up):fn.lookAt(_r,Vi,this.up),this.quaternion.setFromRotationMatrix(fn),r&&(fn.extractRotation(r.matrixWorld),li.setFromRotationMatrix(fn),this.quaternion.premultiply(li.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ra),ci.child=e,this.dispatchEvent(ci),ci.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bd),ys.child=e,this.dispatchEvent(ys),ys.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ra),ci.child=e,this.dispatchEvent(ci),ci.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,e,wd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,Md,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}xt.DEFAULT_UP=new C(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jt=new C,pn=new C,vs=new C,mn=new C,hi=new C,di=new C,Ca=new C,Ss=new C,ws=new C,Ms=new C,bs=new st,Es=new st,Ts=new st;class qt{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Jt.subVectors(e,t),r.cross(Jt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Jt.subVectors(r,t),pn.subVectors(n,t),vs.subVectors(e,t);const a=Jt.dot(Jt),o=Jt.dot(pn),l=Jt.dot(vs),c=pn.dot(pn),h=pn.dot(vs),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const u=1/d,p=(c*l-o*h)*u,g=(a*h-o*l)*u;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,mn)===null?!1:mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,mn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,mn.x),l.addScaledVector(a,mn.y),l.addScaledVector(o,mn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return bs.setScalar(0),Es.setScalar(0),Ts.setScalar(0),bs.fromBufferAttribute(e,t),Es.fromBufferAttribute(e,n),Ts.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(bs,s.x),a.addScaledVector(Es,s.y),a.addScaledVector(Ts,s.z),a}static isFrontFacing(e,t,n,r){return Jt.subVectors(n,t),pn.subVectors(e,t),Jt.cross(pn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jt.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),Jt.cross(pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return qt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;hi.subVectors(r,n),di.subVectors(s,n),Ss.subVectors(e,n);const l=hi.dot(Ss),c=di.dot(Ss);if(l<=0&&c<=0)return t.copy(n);ws.subVectors(e,r);const h=hi.dot(ws),d=di.dot(ws);if(h>=0&&d<=h)return t.copy(r);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(hi,a);Ms.subVectors(e,s);const p=hi.dot(Ms),g=di.dot(Ms);if(g>=0&&p<=g)return t.copy(s);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(di,o);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Ca.subVectors(s,r),o=(d-h)/(d-h+(p-g)),t.copy(r).addScaledVector(Ca,o);const f=1/(m+x+u);return a=x*f,o=u*f,t.copy(n).addScaledVector(hi,a).addScaledVector(di,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const rc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},xr={h:0,s:0,l:0};function As(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ae{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=je.workingColorSpace){if(e=Xo(e,1),t=Ut(t,0,1),n=Ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=As(a,s,e+1/3),this.g=As(a,s,e),this.b=As(a,s,e-1/3)}return je.toWorkingColorSpace(this,r),this}setStyle(e,t=Rt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){const n=rc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yn(e.r),this.g=yn(e.g),this.b=yn(e.b),this}copyLinearToSRGB(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return je.fromWorkingColorSpace(Tt.copy(this),e),Math.round(Ut(Tt.r*255,0,255))*65536+Math.round(Ut(Tt.g*255,0,255))*256+Math.round(Ut(Tt.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(Tt.copy(this),t);const n=Tt.r,r=Tt.g,s=Tt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=Rt){je.fromWorkingColorSpace(Tt.copy(this),e);const t=Tt.r,n=Tt.g,r=Tt.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Cn),this.setHSL(Cn.h+e,Cn.s+t,Cn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Cn),e.getHSL(xr);const n=tr(Cn.h,xr.h,t),r=tr(Cn.s,xr.s,t),s=tr(Cn.l,xr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tt=new Ae;Ae.NAMES=rc;let Ed=0;class wn extends zi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=xn(),this.name="",this.blending=bi,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xs,this.blendDst=qs,this.blendEquation=jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=Ri,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ua,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ni,this.stencilZFail=ni,this.stencilZPass=ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bi&&(n.blending=this.blending),this.side!==zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xs&&(n.blendSrc=this.blendSrc),this.blendDst!==qs&&(n.blendDst=this.blendDst),this.blendEquation!==jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ri&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ua&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Sn extends wn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zt,this.combine=is,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new C,yr=new De;class Pt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Lo,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)yr.fromBufferAttribute(this,t),yr.applyMatrix3(e),this.setXY(t,yr.x,yr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Qt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qt(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qt(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qt(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),r=tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),r=tt(r,this.array),s=tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lo&&(e.usage=this.usage),e}}class sc extends Pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class oc extends Pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Lt extends Pt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Td=0;const Xt=new Ze,Rs=new xt,ui=new C,Gt=new Fn,Wi=new Fn,St=new C;class Ot extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ql(e)?oc:sc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ne().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,n){return Xt.makeTranslation(e,t,n),this.applyMatrix4(Xt),this}scale(e,t,n){return Xt.makeScale(e,t,n),this.applyMatrix4(Xt),this}lookAt(e){return Rs.lookAt(e),Rs.updateMatrix(),this.applyMatrix4(Rs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ui).negate(),this.translate(ui.x,ui.y,ui.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Lt(n,3))}else{for(let n=0,r=t.count;n<r;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Gt.setFromBufferAttribute(s),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Wi.setFromBufferAttribute(o),this.morphTargetsRelative?(St.addVectors(Gt.min,Wi.min),Gt.expandByPoint(St),St.addVectors(Gt.max,Wi.max),Gt.expandByPoint(St)):(Gt.expandByPoint(Wi.min),Gt.expandByPoint(Wi.max))}Gt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)St.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(St));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)St.fromBufferAttribute(o,c),l&&(ui.fromBufferAttribute(e,c),St.add(ui)),r=Math.max(r,n.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new C,l[U]=new C;const c=new C,h=new C,d=new C,u=new De,p=new De,g=new De,x=new C,m=new C;function f(U,w,y){c.fromBufferAttribute(n,U),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,y),u.fromBufferAttribute(s,U),p.fromBufferAttribute(s,w),g.fromBufferAttribute(s,y),h.sub(c),d.sub(c),p.sub(u),g.sub(u);const A=1/(p.x*g.y-g.x*p.y);isFinite(A)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(A),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(A),o[U].add(x),o[w].add(x),o[y].add(x),l[U].add(m),l[w].add(m),l[y].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let U=0,w=E.length;U<w;++U){const y=E[U],A=y.start,B=y.count;for(let N=A,H=A+B;N<H;N+=3)f(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const b=new C,S=new C,z=new C,T=new C;function R(U){z.fromBufferAttribute(r,U),T.copy(z);const w=o[U];b.copy(w),b.sub(z.multiplyScalar(z.dot(w))).normalize(),S.crossVectors(T,w);const A=S.dot(l[U])<0?-1:1;a.setXYZW(U,b.x,b.y,b.z,A)}for(let U=0,w=E.length;U<w;++U){const y=E[U],A=y.start,B=y.count;for(let N=A,H=A+B;N<H;N+=3)R(e.getX(N+0)),R(e.getX(N+1)),R(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const r=new C,s=new C,a=new C,o=new C,l=new C,c=new C,h=new C,d=new C;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new Pt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ot,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=e(u,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pa=new Ze,Gn=new nc,vr=new ki,La=new C,Sr=new C,wr=new C,Mr=new C,Cs=new C,br=new C,Ia=new C,Er=new C;class Ge extends xt{constructor(e=new Ot,t=new Sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){br.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(Cs.fromBufferAttribute(d,e),a?br.addScaledVector(Cs,h):br.addScaledVector(Cs.sub(t),h))}t.add(br)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere),vr.applyMatrix4(s),Gn.copy(e.ray).recast(e.near),!(vr.containsPoint(Gn.origin)===!1&&(Gn.intersectSphere(vr,La)===null||Gn.origin.distanceToSquared(La)>(e.far-e.near)**2))&&(Pa.copy(s).invert(),Gn.copy(e.ray).applyMatrix4(Pa),!(n.boundingBox!==null&&Gn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){const m=u[g],f=a[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=E,z=b;S<z;S+=3){const T=o.getX(S),R=o.getX(S+1),U=o.getX(S+2);r=Tr(this,f,e,n,c,h,d,T,R,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const E=o.getX(m),b=o.getX(m+1),S=o.getX(m+2);r=Tr(this,a,e,n,c,h,d,E,b,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){const m=u[g],f=a[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=E,z=b;S<z;S+=3){const T=S,R=S+1,U=S+2;r=Tr(this,f,e,n,c,h,d,T,R,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const E=m,b=m+1,S=m+2;r=Tr(this,a,e,n,c,h,d,E,b,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Ad(i,e,t,n,r,s,a,o){let l;if(e.side===Ft?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===zn,o),l===null)return null;Er.copy(o),Er.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Er);return c<t.near||c>t.far?null:{distance:c,point:Er.clone(),object:i}}function Tr(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,Sr),i.getVertexPosition(l,wr),i.getVertexPosition(c,Mr);const h=Ad(i,e,t,n,Sr,wr,Mr,Ia);if(h){const d=new C;qt.getBarycoord(Ia,Sr,wr,Mr,d),r&&(h.uv=qt.getInterpolatedAttribute(r,o,l,c,d,new De)),s&&(h.uv1=qt.getInterpolatedAttribute(s,o,l,c,d,new De)),a&&(h.normal=qt.getInterpolatedAttribute(a,o,l,c,d,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new C,materialIndex:0};qt.getNormal(Sr,wr,Mr,u.normal),h.face=u,h.barycoord=d}return h}class Mt extends Ot{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(h,3)),this.setAttribute("uv",new Lt(d,2));function g(x,m,f,E,b,S,z,T,R,U,w){const y=S/R,A=z/U,B=S/2,N=z/2,H=T/2,q=R+1,W=U+1;let ee=0,V=0;const se=new C;for(let ue=0;ue<W;ue++){const we=ue*A-N;for(let He=0;He<q;He++){const ot=He*y-B;se[x]=ot*E,se[m]=we*b,se[f]=H,c.push(se.x,se.y,se.z),se[x]=0,se[m]=0,se[f]=T>0?1:-1,h.push(se.x,se.y,se.z),d.push(He/R),d.push(1-ue/U),ee+=1}}for(let ue=0;ue<U;ue++)for(let we=0;we<R;we++){const He=u+we+q*ue,ot=u+we+q*(ue+1),X=u+(we+1)+q*(ue+1),te=u+(we+1)+q*ue;l.push(He,ot,te),l.push(ot,X,te),V+=6}o.addGroup(p,V,w),p+=V,u+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Di(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Dt(i){const e={};for(let t=0;t<i.length;t++){const n=Di(i[t]);for(const r in n)e[r]=n[r]}return e}function Rd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ac(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const Cd={clone:Di,merge:Dt};var Pd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ld=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends wn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pd,this.fragmentShader=Ld,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Di(e.uniforms),this.uniformsGroups=Rd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class lc extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=_n}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pn=new C,Da=new De,Ua=new De;class Vt extends lc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ir*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ir*2*Math.atan(Math.tan(er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pn.x,Pn.y).multiplyScalar(-e/Pn.z),Pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pn.x,Pn.y).multiplyScalar(-e/Pn.z)}getViewSize(e,t){return this.getViewBounds(e,Da,Ua),t.subVectors(Ua,Da)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(er*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fi=-90,pi=1;class Id extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Vt(fi,pi,e,t);r.layers=this.layers,this.add(r);const s=new Vt(fi,pi,e,t);s.layers=this.layers,this.add(s);const a=new Vt(fi,pi,e,t);a.layers=this.layers,this.add(a);const o=new Vt(fi,pi,e,t);o.layers=this.layers,this.add(o);const l=new Vt(fi,pi,e,t);l.layers=this.layers,this.add(l);const c=new Vt(fi,pi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===_n)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class cc extends Ct{constructor(e,t,n,r,s,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ci,super(e,t,n,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dd extends Nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new cc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:an}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Mt(5,5,5),s=new kn({name:"CubemapFromEquirect",uniforms:Di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ft,blending:Dn});s.uniforms.tEquirect.value=t;const a=new Ge(r,s),o=t.minFilter;return t.minFilter===Jn&&(t.minFilter=an),new Id(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const Ps=new C,Ud=new C,zd=new Ne;class qn{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ps.subVectors(n,t).cross(Ud.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ps),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||zd.getNormalMatrix(e),r=this.coplanarPoint(Ps).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vn=new ki,Ar=new C;class qo{constructor(e=new qn,t=new qn,n=new qn,r=new qn,s=new qn,a=new qn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=_n){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],d=r[6],u=r[7],p=r[8],g=r[9],x=r[10],m=r[11],f=r[12],E=r[13],b=r[14],S=r[15];if(n[0].setComponents(l-s,u-c,m-p,S-f).normalize(),n[1].setComponents(l+s,u+c,m+p,S+f).normalize(),n[2].setComponents(l+a,u+h,m+g,S+E).normalize(),n[3].setComponents(l-a,u-h,m-g,S-E).normalize(),n[4].setComponents(l-o,u-d,m-x,S-b).normalize(),t===_n)n[5].setComponents(l+o,u+d,m+x,S+b).normalize();else if(t===Zr)n[5].setComponents(o,d,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vn)}intersectsSprite(e){return Vn.center.set(0,0,0),Vn.radius=.7071067811865476,Vn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ar.x=r.normal.x>0?e.max.x:e.min.x,Ar.y=r.normal.y>0?e.max.y:e.min.y,Ar.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ar)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hc(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Nd(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){const g=d[u],x=d[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){const x=d[p];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class sr extends Ot{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,d=e/o,u=t/l,p=[],g=[],x=[],m=[];for(let f=0;f<h;f++){const E=f*u-a;for(let b=0;b<c;b++){const S=b*d-s;g.push(S,-E,0),x.push(0,0,1),m.push(b/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<o;E++){const b=E+c*f,S=E+c*(f+1),z=E+1+c*(f+1),T=E+1+c*f;p.push(b,S,T),p.push(S,z,T)}this.setIndex(p),this.setAttribute("position",new Lt(g,3)),this.setAttribute("normal",new Lt(x,3)),this.setAttribute("uv",new Lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sr(e.width,e.height,e.widthSegments,e.heightSegments)}}var kd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Od=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Xd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$d=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Zd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,iu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ru=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,su=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ou=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,au=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,lu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,du=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fu="gl_FragColor = linearToOutputTexel( gl_FragColor );",pu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,gu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_u=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Su=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Eu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Au=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ru=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Cu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Pu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Iu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Du=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Uu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Nu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ku=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Fu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ou=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Xu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ku=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ju=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$u=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ju=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Qu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ef=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,of=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,af=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,df=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ff=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_f=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,vf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Sf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Mf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ef=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Af=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,If=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Uf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Nf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ff=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Wf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Yf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Xf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$f=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Jf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,n0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,r0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,s0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,l0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,u0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,f0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,m0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,g0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:kd,alphahash_pars_fragment:Fd,alphamap_fragment:Od,alphamap_pars_fragment:Hd,alphatest_fragment:Bd,alphatest_pars_fragment:Gd,aomap_fragment:Vd,aomap_pars_fragment:Wd,batching_pars_vertex:Yd,batching_vertex:Xd,begin_vertex:qd,beginnormal_vertex:Kd,bsdfs:jd,iridescence_fragment:$d,bumpmap_pars_fragment:Zd,clipping_planes_fragment:Jd,clipping_planes_pars_fragment:Qd,clipping_planes_pars_vertex:eu,clipping_planes_vertex:tu,color_fragment:nu,color_pars_fragment:iu,color_pars_vertex:ru,color_vertex:su,common:ou,cube_uv_reflection_fragment:au,defaultnormal_vertex:lu,displacementmap_pars_vertex:cu,displacementmap_vertex:hu,emissivemap_fragment:du,emissivemap_pars_fragment:uu,colorspace_fragment:fu,colorspace_pars_fragment:pu,envmap_fragment:mu,envmap_common_pars_fragment:gu,envmap_pars_fragment:_u,envmap_pars_vertex:xu,envmap_physical_pars_fragment:Cu,envmap_vertex:yu,fog_vertex:vu,fog_pars_vertex:Su,fog_fragment:wu,fog_pars_fragment:Mu,gradientmap_pars_fragment:bu,lightmap_pars_fragment:Eu,lights_lambert_fragment:Tu,lights_lambert_pars_fragment:Au,lights_pars_begin:Ru,lights_toon_fragment:Pu,lights_toon_pars_fragment:Lu,lights_phong_fragment:Iu,lights_phong_pars_fragment:Du,lights_physical_fragment:Uu,lights_physical_pars_fragment:zu,lights_fragment_begin:Nu,lights_fragment_maps:ku,lights_fragment_end:Fu,logdepthbuf_fragment:Ou,logdepthbuf_pars_fragment:Hu,logdepthbuf_pars_vertex:Bu,logdepthbuf_vertex:Gu,map_fragment:Vu,map_pars_fragment:Wu,map_particle_fragment:Yu,map_particle_pars_fragment:Xu,metalnessmap_fragment:qu,metalnessmap_pars_fragment:Ku,morphinstance_vertex:ju,morphcolor_vertex:$u,morphnormal_vertex:Zu,morphtarget_pars_vertex:Ju,morphtarget_vertex:Qu,normal_fragment_begin:ef,normal_fragment_maps:tf,normal_pars_fragment:nf,normal_pars_vertex:rf,normal_vertex:sf,normalmap_pars_fragment:of,clearcoat_normal_fragment_begin:af,clearcoat_normal_fragment_maps:lf,clearcoat_pars_fragment:cf,iridescence_pars_fragment:hf,opaque_fragment:df,packing:uf,premultiplied_alpha_fragment:ff,project_vertex:pf,dithering_fragment:mf,dithering_pars_fragment:gf,roughnessmap_fragment:_f,roughnessmap_pars_fragment:xf,shadowmap_pars_fragment:yf,shadowmap_pars_vertex:vf,shadowmap_vertex:Sf,shadowmask_pars_fragment:wf,skinbase_vertex:Mf,skinning_pars_vertex:bf,skinning_vertex:Ef,skinnormal_vertex:Tf,specularmap_fragment:Af,specularmap_pars_fragment:Rf,tonemapping_fragment:Cf,tonemapping_pars_fragment:Pf,transmission_fragment:Lf,transmission_pars_fragment:If,uv_pars_fragment:Df,uv_pars_vertex:Uf,uv_vertex:zf,worldpos_vertex:Nf,background_vert:kf,background_frag:Ff,backgroundCube_vert:Of,backgroundCube_frag:Hf,cube_vert:Bf,cube_frag:Gf,depth_vert:Vf,depth_frag:Wf,distanceRGBA_vert:Yf,distanceRGBA_frag:Xf,equirect_vert:qf,equirect_frag:Kf,linedashed_vert:jf,linedashed_frag:$f,meshbasic_vert:Zf,meshbasic_frag:Jf,meshlambert_vert:Qf,meshlambert_frag:e0,meshmatcap_vert:t0,meshmatcap_frag:n0,meshnormal_vert:i0,meshnormal_frag:r0,meshphong_vert:s0,meshphong_frag:o0,meshphysical_vert:a0,meshphysical_frag:l0,meshtoon_vert:c0,meshtoon_frag:h0,points_vert:d0,points_frag:u0,shadow_vert:f0,shadow_frag:p0,sprite_vert:m0,sprite_frag:g0},ie={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},sn={basic:{uniforms:Dt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Dt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Dt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Dt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Dt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Dt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Dt([ie.points,ie.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Dt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Dt([ie.common,ie.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Dt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Dt([ie.sprite,ie.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Dt([ie.common,ie.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Dt([ie.lights,ie.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};sn.physical={uniforms:Dt([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Rr={r:0,b:0,g:0},Wn=new zt,_0=new Ze;function x0(i,e,t,n,r,s,a){const o=new Ae(0);let l=s===!0?0:1,c,h,d=null,u=0,p=null;function g(E){let b=E.isScene===!0?E.background:null;return b&&b.isTexture&&(b=(E.backgroundBlurriness>0?t:e).get(b)),b}function x(E){let b=!1;const S=g(E);S===null?f(o,l):S&&S.isColor&&(f(S,1),b=!0);const z=i.xr.getEnvironmentBlendMode();z==="additive"?n.buffers.color.setClear(0,0,0,1,a):z==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,b){const S=g(b);S&&(S.isCubeTexture||S.mapping===rs)?(h===void 0&&(h=new Ge(new Mt(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:Di(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(z,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Wn.copy(b.backgroundRotation),Wn.x*=-1,Wn.y*=-1,Wn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Wn.y*=-1,Wn.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(_0.makeRotationFromEuler(Wn)),h.material.toneMapped=je.getTransfer(S.colorSpace)!==nt,(d!==S||u!==S.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=S,u=S.version,p=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Ge(new sr(2,2),new kn({name:"BackgroundMaterial",uniforms:Di(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=je.getTransfer(S.colorSpace)!==nt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||u!==S.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=S,u=S.version,p=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function f(E,b){E.getRGB(Rr,ac(i)),n.buffers.color.setClear(Rr.r,Rr.g,Rr.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(E,b=1){o.set(E),l=b,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,f(o,l)},render:x,addToRenderList:m}}function y0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null);let s=r,a=!1;function o(y,A,B,N,H){let q=!1;const W=d(N,B,A);s!==W&&(s=W,c(s.object)),q=p(y,N,B,H),q&&g(y,N,B,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,S(y,A,B,N),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function d(y,A,B){const N=B.wireframe===!0;let H=n[y.id];H===void 0&&(H={},n[y.id]=H);let q=H[A.id];q===void 0&&(q={},H[A.id]=q);let W=q[N];return W===void 0&&(W=u(l()),q[N]=W),W}function u(y){const A=[],B=[],N=[];for(let H=0;H<t;H++)A[H]=0,B[H]=0,N[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:B,attributeDivisors:N,object:y,attributes:{},index:null}}function p(y,A,B,N){const H=s.attributes,q=A.attributes;let W=0;const ee=B.getAttributes();for(const V in ee)if(ee[V].location>=0){const ue=H[V];let we=q[V];if(we===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(we=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(we=y.instanceColor)),ue===void 0||ue.attribute!==we||we&&ue.data!==we.data)return!0;W++}return s.attributesNum!==W||s.index!==N}function g(y,A,B,N){const H={},q=A.attributes;let W=0;const ee=B.getAttributes();for(const V in ee)if(ee[V].location>=0){let ue=q[V];ue===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(ue=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(ue=y.instanceColor));const we={};we.attribute=ue,ue&&ue.data&&(we.data=ue.data),H[V]=we,W++}s.attributes=H,s.attributesNum=W,s.index=N}function x(){const y=s.newAttributes;for(let A=0,B=y.length;A<B;A++)y[A]=0}function m(y){f(y,0)}function f(y,A){const B=s.newAttributes,N=s.enabledAttributes,H=s.attributeDivisors;B[y]=1,N[y]===0&&(i.enableVertexAttribArray(y),N[y]=1),H[y]!==A&&(i.vertexAttribDivisor(y,A),H[y]=A)}function E(){const y=s.newAttributes,A=s.enabledAttributes;for(let B=0,N=A.length;B<N;B++)A[B]!==y[B]&&(i.disableVertexAttribArray(B),A[B]=0)}function b(y,A,B,N,H,q,W){W===!0?i.vertexAttribIPointer(y,A,B,H,q):i.vertexAttribPointer(y,A,B,N,H,q)}function S(y,A,B,N){x();const H=N.attributes,q=B.getAttributes(),W=A.defaultAttributeValues;for(const ee in q){const V=q[ee];if(V.location>=0){let se=H[ee];if(se===void 0&&(ee==="instanceMatrix"&&y.instanceMatrix&&(se=y.instanceMatrix),ee==="instanceColor"&&y.instanceColor&&(se=y.instanceColor)),se!==void 0){const ue=se.normalized,we=se.itemSize,He=e.get(se);if(He===void 0)continue;const ot=He.buffer,X=He.type,te=He.bytesPerElement,ye=X===i.INT||X===i.UNSIGNED_INT||se.gpuType===Oo;if(se.isInterleavedBufferAttribute){const oe=se.data,Te=oe.stride,Ie=se.offset;if(oe.isInstancedInterleavedBuffer){for(let Be=0;Be<V.locationSize;Be++)f(V.location+Be,oe.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Be=0;Be<V.locationSize;Be++)m(V.location+Be);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let Be=0;Be<V.locationSize;Be++)b(V.location+Be,we/V.locationSize,X,ue,Te*te,(Ie+we/V.locationSize*Be)*te,ye)}else{if(se.isInstancedBufferAttribute){for(let oe=0;oe<V.locationSize;oe++)f(V.location+oe,se.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let oe=0;oe<V.locationSize;oe++)m(V.location+oe);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let oe=0;oe<V.locationSize;oe++)b(V.location+oe,we/V.locationSize,X,ue,we*te,we/V.locationSize*oe*te,ye)}}else if(W!==void 0){const ue=W[ee];if(ue!==void 0)switch(ue.length){case 2:i.vertexAttrib2fv(V.location,ue);break;case 3:i.vertexAttrib3fv(V.location,ue);break;case 4:i.vertexAttrib4fv(V.location,ue);break;default:i.vertexAttrib1fv(V.location,ue)}}}}E()}function z(){U();for(const y in n){const A=n[y];for(const B in A){const N=A[B];for(const H in N)h(N[H].object),delete N[H];delete A[B]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;const A=n[y.id];for(const B in A){const N=A[B];for(const H in N)h(N[H].object),delete N[H];delete A[B]}delete n[y.id]}function R(y){for(const A in n){const B=n[A];if(B[y.id]===void 0)continue;const N=B[y.id];for(const H in N)h(N[H].object),delete N[H];delete B[y.id]}}function U(){w(),a=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:U,resetDefaultState:w,dispose:z,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:E}}function v0(i,e,t){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),t.update(h,n,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];t.update(p,n,1)}function l(c,h,d,u){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x]*u[x];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function S0(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==en&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const U=R===rr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==vn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ln&&!U)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),z=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:z,maxSamples:T}}function w0(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new qn,o=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||r;return r=u,n=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{const E=s?0:n,b=E*4;let S=f.clippingState||null;l.value=S,S=h(g,u,b,p);for(let z=0;z!==b;++z)S[z]=t[z];f.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,p,g){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const f=p+x*4,E=u.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,S=p;b!==x;++b,S+=4)a.copy(d[b]).applyMatrix4(E,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function M0(i){let e=new WeakMap;function t(a,o){return o===to?a.mapping=Ci:o===no&&(a.mapping=Pi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===to||o===no)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Dd(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class dc extends lc{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Si=4,za=[.125,.215,.35,.446,.526,.582],$n=20,Ls=new dc,Na=new Ae;let Is=null,Ds=0,Us=0,zs=!1;const Kn=(1+Math.sqrt(5))/2,mi=1/Kn,ka=[new C(-Kn,mi,0),new C(Kn,mi,0),new C(-mi,0,Kn),new C(mi,0,Kn),new C(0,Kn,-mi),new C(0,Kn,mi),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class Fa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Is=this._renderer.getRenderTarget(),Ds=this._renderer.getActiveCubeFace(),Us=this._renderer.getActiveMipmapLevel(),zs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ba(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ha(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Is,Ds,Us),this._renderer.xr.enabled=zs,e.scissorTest=!1,Cr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ci||e.mapping===Pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Is=this._renderer.getRenderTarget(),Ds=this._renderer.getActiveCubeFace(),Us=this._renderer.getActiveMipmapLevel(),zs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:rr,format:en,colorSpace:Ui,depthBuffer:!1},r=Oa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oa(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=b0(s)),this._blurMaterial=E0(s,e,t)}return r}_compileMaterial(e){const t=new Ge(this._lodPlanes[0],e);this._renderer.compile(t,Ls)}_sceneToCubeUV(e,t,n,r){const o=new Vt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Na),h.toneMapping=Un,h.autoClear=!1;const p=new Sn({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),g=new Ge(new Mt,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(Na),x=!0);for(let f=0;f<6;f++){const E=f%3;E===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):E===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const b=this._cubeSize;Cr(r,E*b,f>2?b:0,b,b),h.setRenderTarget(r),x&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Ci||e.mapping===Pi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ba()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ha());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Ge(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Cr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ls)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=ka[(r-s-1)%ka.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Ge(this._lodPlanes[r],c),u=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*$n-1),x=s/g,m=isFinite(s)?1+Math.floor(h*x):$n;m>$n&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$n}`);const f=[];let E=0;for(let R=0;R<$n;++R){const U=R/x,w=Math.exp(-U*U/2);f.push(w),R===0?E+=w:R<m&&(E+=2*w)}for(let R=0;R<f.length;R++)f[R]=f[R]/E;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:b}=this;u.dTheta.value=g,u.mipInt.value=b-n;const S=this._sizeLods[r],z=3*S*(r>b-Si?r-b+Si:0),T=4*(this._cubeSize-S);Cr(t,z,T,3*S,2*S),l.setRenderTarget(t),l.render(d,Ls)}}function b0(i){const e=[],t=[],n=[];let r=i;const s=i-Si+1+za.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-Si?l=za[a-i+Si-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,x=3,m=2,f=1,E=new Float32Array(x*g*p),b=new Float32Array(m*g*p),S=new Float32Array(f*g*p);for(let T=0;T<p;T++){const R=T%3*2/3-1,U=T>2?0:-1,w=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];E.set(w,x*g*T),b.set(u,m*g*T);const y=[T,T,T,T,T,T];S.set(y,f*g*T)}const z=new Ot;z.setAttribute("position",new Pt(E,x)),z.setAttribute("uv",new Pt(b,m)),z.setAttribute("faceIndex",new Pt(S,f)),e.push(z),r>Si&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Oa(i,e,t){const n=new Nn(i,e,t);return n.texture.mapping=rs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function E0(i,e,t){const n=new Float32Array($n),r=new C(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Ha(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Ba(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Ko(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function T0(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===to||l===no,h=l===Ci||l===Pi;if(c||h){let d=e.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new Fa(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&r(p)?(t===null&&(t=new Fa(i)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function A0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Ji("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function R0(i,e,t,n){const r={},s=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const x=u.morphAttributes[g];for(let m=0,f=x.length;m<f;m++)e.remove(x[m])}u.removeEventListener("dispose",a),delete r[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)e.update(u[g],i.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const x=p[g];for(let m=0,f=x.length;m<f;m++)e.update(x[m],i.ARRAY_BUFFER)}}function c(d){const u=[],p=d.index,g=d.attributes.position;let x=0;if(p!==null){const E=p.array;x=p.version;for(let b=0,S=E.length;b<S;b+=3){const z=E[b+0],T=E[b+1],R=E[b+2];u.push(z,T,T,R,R,z)}}else if(g!==void 0){const E=g.array;x=g.version;for(let b=0,S=E.length/3-1;b<S;b+=3){const z=b+0,T=b+1,R=b+2;u.push(z,T,T,R,R,z)}}else return;const m=new(Ql(u)?oc:sc)(u,1);m.version=x;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function h(d){const u=s.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function C0(i,e,t){let n;function r(u){n=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,p){i.drawElements(n,p,s,u*a),t.update(p,n,1)}function c(u,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,u*a,g),t.update(p,n,g))}function h(u,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function d(u,p,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/a,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,u,0,x,0,g);let f=0;for(let E=0;E<g;E++)f+=p[E]*x[E];t.update(f,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function P0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function L0(i,e,t){const n=new WeakMap,r=new st;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let w=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let b=0;p===!0&&(b=1),g===!0&&(b=2),x===!0&&(b=3);let S=o.attributes.position.count*b,z=1;S>e.maxTextureSize&&(z=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const T=new Float32Array(S*z*4*d),R=new tc(T,S,z,d);R.type=ln,R.needsUpdate=!0;const U=b*4;for(let y=0;y<d;y++){const A=m[y],B=f[y],N=E[y],H=S*z*4*y;for(let q=0;q<A.count;q++){const W=q*U;p===!0&&(r.fromBufferAttribute(A,q),T[H+W+0]=r.x,T[H+W+1]=r.y,T[H+W+2]=r.z,T[H+W+3]=0),g===!0&&(r.fromBufferAttribute(B,q),T[H+W+4]=r.x,T[H+W+5]=r.y,T[H+W+6]=r.z,T[H+W+7]=0),x===!0&&(r.fromBufferAttribute(N,q),T[H+W+8]=r.x,T[H+W+9]=r.y,T[H+W+10]=r.z,T[H+W+11]=N.itemSize===4?r.w:1)}}u={count:d,texture:R,size:new De(S,z)},n.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function I0(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;r.get(u)!==c&&(u.update(),r.set(u,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class uc extends Ct{constructor(e,t,n,r,s,a,o,l,c,h=Ei){if(h!==Ei&&h!==Ii)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ei&&(n=Qn),n===void 0&&h===Ii&&(n=Li),super(null,r,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:wt,this.minFilter=l!==void 0?l:wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const fc=new Ct,Ga=new uc(1,1),pc=new tc,mc=new _d,gc=new cc,Va=[],Wa=[],Ya=new Float32Array(16),Xa=new Float32Array(9),qa=new Float32Array(4);function Fi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Va[r];if(s===void 0&&(s=new Float32Array(r),Va[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function as(i,e){let t=Wa[e];t===void 0&&(t=new Int32Array(e),Wa[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function D0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function U0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2fv(this.addr,e),vt(t,e)}}function z0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;i.uniform3fv(this.addr,e),vt(t,e)}}function N0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4fv(this.addr,e),vt(t,e)}}function k0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(yt(t,n))return;qa.set(n),i.uniformMatrix2fv(this.addr,!1,qa),vt(t,n)}}function F0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(yt(t,n))return;Xa.set(n),i.uniformMatrix3fv(this.addr,!1,Xa),vt(t,n)}}function O0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(yt(t,n))return;Ya.set(n),i.uniformMatrix4fv(this.addr,!1,Ya),vt(t,n)}}function H0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function B0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2iv(this.addr,e),vt(t,e)}}function G0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;i.uniform3iv(this.addr,e),vt(t,e)}}function V0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4iv(this.addr,e),vt(t,e)}}function W0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Y0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2uiv(this.addr,e),vt(t,e)}}function X0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;i.uniform3uiv(this.addr,e),vt(t,e)}}function q0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4uiv(this.addr,e),vt(t,e)}}function K0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ga.compareFunction=Jl,s=Ga):s=fc,t.setTexture2D(e||s,r)}function j0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||mc,r)}function $0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||gc,r)}function Z0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||pc,r)}function J0(i){switch(i){case 5126:return D0;case 35664:return U0;case 35665:return z0;case 35666:return N0;case 35674:return k0;case 35675:return F0;case 35676:return O0;case 5124:case 35670:return H0;case 35667:case 35671:return B0;case 35668:case 35672:return G0;case 35669:case 35673:return V0;case 5125:return W0;case 36294:return Y0;case 36295:return X0;case 36296:return q0;case 35678:case 36198:case 36298:case 36306:case 35682:return K0;case 35679:case 36299:case 36307:return j0;case 35680:case 36300:case 36308:case 36293:return $0;case 36289:case 36303:case 36311:case 36292:return Z0}}function Q0(i,e){i.uniform1fv(this.addr,e)}function ep(i,e){const t=Fi(e,this.size,2);i.uniform2fv(this.addr,t)}function tp(i,e){const t=Fi(e,this.size,3);i.uniform3fv(this.addr,t)}function np(i,e){const t=Fi(e,this.size,4);i.uniform4fv(this.addr,t)}function ip(i,e){const t=Fi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function rp(i,e){const t=Fi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function sp(i,e){const t=Fi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function op(i,e){i.uniform1iv(this.addr,e)}function ap(i,e){i.uniform2iv(this.addr,e)}function lp(i,e){i.uniform3iv(this.addr,e)}function cp(i,e){i.uniform4iv(this.addr,e)}function hp(i,e){i.uniform1uiv(this.addr,e)}function dp(i,e){i.uniform2uiv(this.addr,e)}function up(i,e){i.uniform3uiv(this.addr,e)}function fp(i,e){i.uniform4uiv(this.addr,e)}function pp(i,e,t){const n=this.cache,r=e.length,s=as(t,r);yt(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||fc,s[a])}function mp(i,e,t){const n=this.cache,r=e.length,s=as(t,r);yt(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||mc,s[a])}function gp(i,e,t){const n=this.cache,r=e.length,s=as(t,r);yt(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||gc,s[a])}function _p(i,e,t){const n=this.cache,r=e.length,s=as(t,r);yt(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||pc,s[a])}function xp(i){switch(i){case 5126:return Q0;case 35664:return ep;case 35665:return tp;case 35666:return np;case 35674:return ip;case 35675:return rp;case 35676:return sp;case 5124:case 35670:return op;case 35667:case 35671:return ap;case 35668:case 35672:return lp;case 35669:case 35673:return cp;case 5125:return hp;case 36294:return dp;case 36295:return up;case 36296:return fp;case 35678:case 36198:case 36298:case 36306:case 35682:return pp;case 35679:case 36299:case 36307:return mp;case 35680:case 36300:case 36308:case 36293:return gp;case 36289:case 36303:case 36311:case 36292:return _p}}class yp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=J0(t.type)}}class vp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xp(t.type)}}class Sp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Ns=/(\w+)(\])?(\[|\.)?/g;function Ka(i,e){i.seq.push(e),i.map[e.id]=e}function wp(i,e,t){const n=i.name,r=n.length;for(Ns.lastIndex=0;;){const s=Ns.exec(n),a=Ns.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Ka(t,c===void 0?new yp(o,i,e):new vp(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Sp(o),Ka(t,d)),t=d}}}class qr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);wp(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function ja(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Mp=37297;let bp=0;function Ep(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const $a=new Ne;function Tp(i){je._getMatrix($a,je.workingColorSpace,i);const e=`mat3( ${$a.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(i)){case os:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Za(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Ep(i.getShaderSource(e),a)}else return r}function Ap(i,e){const t=Tp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Rp(i,e){let t;switch(e){case Ch:t="Linear";break;case Ph:t="Reinhard";break;case Lh:t="Cineon";break;case Ih:t="ACESFilmic";break;case Uh:t="AgX";break;case zh:t="Neutral";break;case Dh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Pr=new C;function Cp(){je.getLuminanceCoefficients(Pr);const i=Pr.x.toFixed(4),e=Pr.y.toFixed(4),t=Pr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qi).join(`
`)}function Lp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ip(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Qi(i){return i!==""}function Ja(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qa(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Dp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Io(i){return i.replace(Dp,zp)}const Up=new Map;function zp(i,e){let t=Oe[e];if(t===void 0){const n=Up.get(e);if(n!==void 0)t=Oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Io(t)}const Np=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function el(i){return i.replace(Np,kp)}function kp(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function tl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Fp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Hl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===lh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===gn&&(e="SHADOWMAP_TYPE_VSM"),e}function Op(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ci:case Pi:e="ENVMAP_TYPE_CUBE";break;case rs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Pi:e="ENVMAP_MODE_REFRACTION";break}return e}function Bp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case is:e="ENVMAP_BLENDING_MULTIPLY";break;case Ah:e="ENVMAP_BLENDING_MIX";break;case Rh:e="ENVMAP_BLENDING_ADD";break}return e}function Gp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Vp(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Fp(t),c=Op(t),h=Hp(t),d=Bp(t),u=Gp(t),p=Pp(t),g=Lp(s),x=r.createProgram();let m,f,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qi).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qi).join(`
`),f.length>0&&(f+=`
`)):(m=[tl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qi).join(`
`),f=[tl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Un?"#define TONE_MAPPING":"",t.toneMapping!==Un?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Un?Rp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,Ap("linearToOutputTexel",t.outputColorSpace),Cp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qi).join(`
`)),a=Io(a),a=Ja(a,t),a=Qa(a,t),o=Io(o),o=Ja(o,t),o=Qa(o,t),a=el(a),o=el(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===fa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=E+m+a,S=E+f+o,z=ja(r,r.VERTEX_SHADER,b),T=ja(r,r.FRAGMENT_SHADER,S);r.attachShader(x,z),r.attachShader(x,T),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function R(A){if(i.debug.checkShaderErrors){const B=r.getProgramInfoLog(x).trim(),N=r.getShaderInfoLog(z).trim(),H=r.getShaderInfoLog(T).trim();let q=!0,W=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,z,T);else{const ee=Za(r,z,"vertex"),V=Za(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+B+`
`+ee+`
`+V)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(N===""||H==="")&&(W=!1);W&&(A.diagnostics={runnable:q,programLog:B,vertexShader:{log:N,prefix:m},fragmentShader:{log:H,prefix:f}})}r.deleteShader(z),r.deleteShader(T),U=new qr(r,x),w=Ip(r,x)}let U;this.getUniforms=function(){return U===void 0&&R(this),U};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,Mp)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bp++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=z,this.fragmentShader=T,this}let Wp=0;class Yp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Xp(e),t.set(e,n)),n}}class Xp{constructor(e){this.id=Wp++,this.code=e,this.usedTimes=0}}function qp(i,e,t,n,r,s,a){const o=new ic,l=new Yp,c=new Set,h=[],d=r.logarithmicDepthBuffer,u=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,y,A,B,N){const H=B.fog,q=N.geometry,W=w.isMeshStandardMaterial?B.environment:null,ee=(w.isMeshStandardMaterial?t:e).get(w.envMap||W),V=ee&&ee.mapping===rs?ee.image.height:null,se=g[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const ue=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,we=ue!==void 0?ue.length:0;let He=0;q.morphAttributes.position!==void 0&&(He=1),q.morphAttributes.normal!==void 0&&(He=2),q.morphAttributes.color!==void 0&&(He=3);let ot,X,te,ye;if(se){const et=sn[se];ot=et.vertexShader,X=et.fragmentShader}else ot=w.vertexShader,X=w.fragmentShader,l.update(w),te=l.getVertexShaderID(w),ye=l.getFragmentShaderID(w);const oe=i.getRenderTarget(),Te=i.state.buffers.depth.getReversed(),Ie=N.isInstancedMesh===!0,Be=N.isBatchedMesh===!0,ft=!!w.map,qe=!!w.matcap,gt=!!ee,D=!!w.aoMap,Wt=!!w.lightMap,Ve=!!w.bumpMap,We=!!w.normalMap,be=!!w.displacementMap,ct=!!w.emissiveMap,Me=!!w.metalnessMap,M=!!w.roughnessMap,_=w.anisotropy>0,k=w.clearcoat>0,K=w.dispersion>0,$=w.iridescence>0,Y=w.sheen>0,ve=w.transmission>0,ae=_&&!!w.anisotropyMap,fe=k&&!!w.clearcoatMap,Ke=k&&!!w.clearcoatNormalMap,Z=k&&!!w.clearcoatRoughnessMap,pe=$&&!!w.iridescenceMap,Ee=$&&!!w.iridescenceThicknessMap,Re=Y&&!!w.sheenColorMap,me=Y&&!!w.sheenRoughnessMap,Ye=!!w.specularMap,Fe=!!w.specularColorMap,at=!!w.specularIntensityMap,P=ve&&!!w.transmissionMap,re=ve&&!!w.thicknessMap,G=!!w.gradientMap,j=!!w.alphaMap,he=w.alphaTest>0,le=!!w.alphaHash,Ue=!!w.extensions;let mt=Un;w.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(mt=i.toneMapping);const bt={shaderID:se,shaderType:w.type,shaderName:w.name,vertexShader:ot,fragmentShader:X,defines:w.defines,customVertexShaderID:te,customFragmentShaderID:ye,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Be,batchingColor:Be&&N._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&N.instanceColor!==null,instancingMorph:Ie&&N.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Ui,alphaToCoverage:!!w.alphaToCoverage,map:ft,matcap:qe,envMap:gt,envMapMode:gt&&ee.mapping,envMapCubeUVHeight:V,aoMap:D,lightMap:Wt,bumpMap:Ve,normalMap:We,displacementMap:u&&be,emissiveMap:ct,normalMapObjectSpace:We&&w.normalMapType===Fh,normalMapTangentSpace:We&&w.normalMapType===ss,metalnessMap:Me,roughnessMap:M,anisotropy:_,anisotropyMap:ae,clearcoat:k,clearcoatMap:fe,clearcoatNormalMap:Ke,clearcoatRoughnessMap:Z,dispersion:K,iridescence:$,iridescenceMap:pe,iridescenceThicknessMap:Ee,sheen:Y,sheenColorMap:Re,sheenRoughnessMap:me,specularMap:Ye,specularColorMap:Fe,specularIntensityMap:at,transmission:ve,transmissionMap:P,thicknessMap:re,gradientMap:G,opaque:w.transparent===!1&&w.blending===bi&&w.alphaToCoverage===!1,alphaMap:j,alphaTest:he,alphaHash:le,combine:w.combine,mapUv:ft&&x(w.map.channel),aoMapUv:D&&x(w.aoMap.channel),lightMapUv:Wt&&x(w.lightMap.channel),bumpMapUv:Ve&&x(w.bumpMap.channel),normalMapUv:We&&x(w.normalMap.channel),displacementMapUv:be&&x(w.displacementMap.channel),emissiveMapUv:ct&&x(w.emissiveMap.channel),metalnessMapUv:Me&&x(w.metalnessMap.channel),roughnessMapUv:M&&x(w.roughnessMap.channel),anisotropyMapUv:ae&&x(w.anisotropyMap.channel),clearcoatMapUv:fe&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:Ke&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:me&&x(w.sheenRoughnessMap.channel),specularMapUv:Ye&&x(w.specularMap.channel),specularColorMapUv:Fe&&x(w.specularColorMap.channel),specularIntensityMapUv:at&&x(w.specularIntensityMap.channel),transmissionMapUv:P&&x(w.transmissionMap.channel),thicknessMapUv:re&&x(w.thicknessMap.channel),alphaMapUv:j&&x(w.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(We||_),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!q.attributes.uv&&(ft||j),fog:!!H,useFog:w.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Te,skinning:N.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:He,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:mt,decodeVideoTexture:ft&&w.map.isVideoTexture===!0&&je.getTransfer(w.map.colorSpace)===nt,decodeVideoTextureEmissive:ct&&w.emissiveMap.isVideoTexture===!0&&je.getTransfer(w.emissiveMap.colorSpace)===nt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===on,flipSided:w.side===Ft,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ue&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&w.extensions.multiDraw===!0||Be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return bt.vertexUv1s=c.has(1),bt.vertexUv2s=c.has(2),bt.vertexUv3s=c.has(3),c.clear(),bt}function f(w){const y=[];if(w.shaderID?y.push(w.shaderID):(y.push(w.customVertexShaderID),y.push(w.customFragmentShaderID)),w.defines!==void 0)for(const A in w.defines)y.push(A),y.push(w.defines[A]);return w.isRawShaderMaterial===!1&&(E(y,w),b(y,w),y.push(i.outputColorSpace)),y.push(w.customProgramCacheKey),y.join()}function E(w,y){w.push(y.precision),w.push(y.outputColorSpace),w.push(y.envMapMode),w.push(y.envMapCubeUVHeight),w.push(y.mapUv),w.push(y.alphaMapUv),w.push(y.lightMapUv),w.push(y.aoMapUv),w.push(y.bumpMapUv),w.push(y.normalMapUv),w.push(y.displacementMapUv),w.push(y.emissiveMapUv),w.push(y.metalnessMapUv),w.push(y.roughnessMapUv),w.push(y.anisotropyMapUv),w.push(y.clearcoatMapUv),w.push(y.clearcoatNormalMapUv),w.push(y.clearcoatRoughnessMapUv),w.push(y.iridescenceMapUv),w.push(y.iridescenceThicknessMapUv),w.push(y.sheenColorMapUv),w.push(y.sheenRoughnessMapUv),w.push(y.specularMapUv),w.push(y.specularColorMapUv),w.push(y.specularIntensityMapUv),w.push(y.transmissionMapUv),w.push(y.thicknessMapUv),w.push(y.combine),w.push(y.fogExp2),w.push(y.sizeAttenuation),w.push(y.morphTargetsCount),w.push(y.morphAttributeCount),w.push(y.numDirLights),w.push(y.numPointLights),w.push(y.numSpotLights),w.push(y.numSpotLightMaps),w.push(y.numHemiLights),w.push(y.numRectAreaLights),w.push(y.numDirLightShadows),w.push(y.numPointLightShadows),w.push(y.numSpotLightShadows),w.push(y.numSpotLightShadowsWithMaps),w.push(y.numLightProbes),w.push(y.shadowMapType),w.push(y.toneMapping),w.push(y.numClippingPlanes),w.push(y.numClipIntersection),w.push(y.depthPacking)}function b(w,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),w.push(o.mask)}function S(w){const y=g[w.type];let A;if(y){const B=sn[y];A=Cd.clone(B.uniforms)}else A=w.uniforms;return A}function z(w,y){let A;for(let B=0,N=h.length;B<N;B++){const H=h[B];if(H.cacheKey===y){A=H,++A.usedTimes;break}}return A===void 0&&(A=new Vp(i,y,w,s),h.push(A)),A}function T(w){if(--w.usedTimes===0){const y=h.indexOf(w);h[y]=h[h.length-1],h.pop(),w.destroy()}}function R(w){l.remove(w)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:z,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:U}}function Kp(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function jp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function nl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function il(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(d,u,p,g,x,m){let f=i[e];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},i[e]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=x,f.group=m),e++,f}function o(d,u,p,g,x,m){const f=a(d,u,p,g,x,m);p.transmission>0?n.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(d,u,p,g,x,m){const f=a(d,u,p,g,x,m);p.transmission>0?n.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function c(d,u){t.length>1&&t.sort(d||jp),n.length>1&&n.sort(u||nl),r.length>1&&r.sort(u||nl)}function h(){for(let d=e,u=i.length;d<u;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function $p(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new il,i.set(n,[a])):r>=s.length?(a=new il,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Zp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Ae};break;case"SpotLight":t={position:new C,direction:new C,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function Jp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Qp=0;function em(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function tm(i){const e=new Zp,t=Jp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const r=new C,s=new Ze,a=new Ze;function o(c){let h=0,d=0,u=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,E=0,b=0,S=0,z=0,T=0,R=0;c.sort(em);for(let w=0,y=c.length;w<y;w++){const A=c[w],B=A.color,N=A.intensity,H=A.distance,q=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=B.r*N,d+=B.g*N,u+=B.b*N;else if(A.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(A.sh.coefficients[W],N);R++}else if(A.isDirectionalLight){const W=e.get(A);if(W.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const ee=A.shadow,V=t.get(A);V.shadowIntensity=ee.intensity,V.shadowBias=ee.bias,V.shadowNormalBias=ee.normalBias,V.shadowRadius=ee.radius,V.shadowMapSize=ee.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=q,n.directionalShadowMatrix[p]=A.shadow.matrix,E++}n.directional[p]=W,p++}else if(A.isSpotLight){const W=e.get(A);W.position.setFromMatrixPosition(A.matrixWorld),W.color.copy(B).multiplyScalar(N),W.distance=H,W.coneCos=Math.cos(A.angle),W.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),W.decay=A.decay,n.spot[x]=W;const ee=A.shadow;if(A.map&&(n.spotLightMap[z]=A.map,z++,ee.updateMatrices(A),A.castShadow&&T++),n.spotLightMatrix[x]=ee.matrix,A.castShadow){const V=t.get(A);V.shadowIntensity=ee.intensity,V.shadowBias=ee.bias,V.shadowNormalBias=ee.normalBias,V.shadowRadius=ee.radius,V.shadowMapSize=ee.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=q,S++}x++}else if(A.isRectAreaLight){const W=e.get(A);W.color.copy(B).multiplyScalar(N),W.halfWidth.set(A.width*.5,0,0),W.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=W,m++}else if(A.isPointLight){const W=e.get(A);if(W.color.copy(A.color).multiplyScalar(A.intensity),W.distance=A.distance,W.decay=A.decay,A.castShadow){const ee=A.shadow,V=t.get(A);V.shadowIntensity=ee.intensity,V.shadowBias=ee.bias,V.shadowNormalBias=ee.normalBias,V.shadowRadius=ee.radius,V.shadowMapSize=ee.mapSize,V.shadowCameraNear=ee.camera.near,V.shadowCameraFar=ee.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=A.shadow.matrix,b++}n.point[g]=W,g++}else if(A.isHemisphereLight){const W=e.get(A);W.skyColor.copy(A.color).multiplyScalar(N),W.groundColor.copy(A.groundColor).multiplyScalar(N),n.hemi[f]=W,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ie.LTC_FLOAT_1,n.rectAreaLTC2=ie.LTC_FLOAT_2):(n.rectAreaLTC1=ie.LTC_HALF_1,n.rectAreaLTC2=ie.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const U=n.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==x||U.rectAreaLength!==m||U.hemiLength!==f||U.numDirectionalShadows!==E||U.numPointShadows!==b||U.numSpotShadows!==S||U.numSpotMaps!==z||U.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=S+z-T,n.spotLightMap.length=z,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,U.directionalLength=p,U.pointLength=g,U.spotLength=x,U.rectAreaLength=m,U.hemiLength=f,U.numDirectionalShadows=E,U.numPointShadows=b,U.numSpotShadows=S,U.numSpotMaps=z,U.numLightProbes=R,n.version=Qp++)}function l(c,h){let d=0,u=0,p=0,g=0,x=0;const m=h.matrixWorldInverse;for(let f=0,E=c.length;f<E;f++){const b=c[f];if(b.isDirectionalLight){const S=n.directional[d];S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(b.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(b.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const S=n.point[u];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),u++}else if(b.isHemisphereLight){const S=n.hemi[x];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function rl(i){const e=new tm(i),t=[],n=[];function r(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function nm(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new rl(i),e.set(r,[o])):s>=a.length?(o=new rl(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class im extends wn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Nh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rm extends wn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const sm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,om=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function am(i,e,t){let n=new qo;const r=new De,s=new De,a=new st,o=new im({depthPacking:kh}),l=new rm,c={},h=t.maxTextureSize,d={[zn]:Ft,[Ft]:zn,[on]:on},u=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:sm,fragmentShader:om}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ot;g.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ge(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hl;let f=this.type;this.render=function(T,R,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const w=i.getRenderTarget(),y=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Dn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const N=f!==gn&&this.type===gn,H=f===gn&&this.type!==gn;for(let q=0,W=T.length;q<W;q++){const ee=T[q],V=ee.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const se=V.getFrameExtents();if(r.multiply(se),s.copy(V.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/se.x),r.x=s.x*se.x,V.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/se.y),r.y=s.y*se.y,V.mapSize.y=s.y)),V.map===null||N===!0||H===!0){const we=this.type!==gn?{minFilter:wt,magFilter:wt}:{};V.map!==null&&V.map.dispose(),V.map=new Nn(r.x,r.y,we),V.map.texture.name=ee.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const ue=V.getViewportCount();for(let we=0;we<ue;we++){const He=V.getViewport(we);a.set(s.x*He.x,s.y*He.y,s.x*He.z,s.y*He.w),B.viewport(a),V.updateMatrices(ee,we),n=V.getFrustum(),S(R,U,V.camera,ee,this.type)}V.isPointLightShadow!==!0&&this.type===gn&&E(V,U),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(w,y,A)};function E(T,R){const U=e.update(x);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Nn(r.x,r.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,U,u,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,U,p,x,null)}function b(T,R,U,w){let y=null;const A=U.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(A!==void 0)y=A;else if(y=U.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const B=y.uuid,N=R.uuid;let H=c[B];H===void 0&&(H={},c[B]=H);let q=H[N];q===void 0&&(q=y.clone(),H[N]=q,R.addEventListener("dispose",z)),y=q}if(y.visible=R.visible,y.wireframe=R.wireframe,w===gn?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:d[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,U.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const B=i.properties.get(y);B.light=U}return y}function S(T,R,U,w,y){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===gn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,T.matrixWorld);const N=e.update(T),H=T.material;if(Array.isArray(H)){const q=N.groups;for(let W=0,ee=q.length;W<ee;W++){const V=q[W],se=H[V.materialIndex];if(se&&se.visible){const ue=b(T,se,w,y);T.onBeforeShadow(i,T,R,U,N,ue,V),i.renderBufferDirect(U,null,N,ue,T,V),T.onAfterShadow(i,T,R,U,N,ue,V)}}}else if(H.visible){const q=b(T,H,w,y);T.onBeforeShadow(i,T,R,U,N,q,null),i.renderBufferDirect(U,null,N,q,T,null),T.onAfterShadow(i,T,R,U,N,q,null)}}const B=T.children;for(let N=0,H=B.length;N<H;N++)S(B[N],R,U,w,y)}function z(T){T.target.removeEventListener("dispose",z);for(const U in c){const w=c[U],y=T.target.uuid;y in w&&(w[y].dispose(),delete w[y])}}}const lm={[Ks]:js,[$s]:Qs,[Zs]:eo,[Ri]:Js,[js]:Ks,[Qs]:$s,[eo]:Zs,[Js]:Ri};function cm(i,e){function t(){let P=!1;const re=new st;let G=null;const j=new st(0,0,0,0);return{setMask:function(he){G!==he&&!P&&(i.colorMask(he,he,he,he),G=he)},setLocked:function(he){P=he},setClear:function(he,le,Ue,mt,bt){bt===!0&&(he*=mt,le*=mt,Ue*=mt),re.set(he,le,Ue,mt),j.equals(re)===!1&&(i.clearColor(he,le,Ue,mt),j.copy(re))},reset:function(){P=!1,G=null,j.set(-1,0,0,0)}}}function n(){let P=!1,re=!1,G=null,j=null,he=null;return{setReversed:function(le){if(re!==le){const Ue=e.get("EXT_clip_control");re?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT);const mt=he;he=null,this.setClear(mt)}re=le},getReversed:function(){return re},setTest:function(le){le?oe(i.DEPTH_TEST):Te(i.DEPTH_TEST)},setMask:function(le){G!==le&&!P&&(i.depthMask(le),G=le)},setFunc:function(le){if(re&&(le=lm[le]),j!==le){switch(le){case Ks:i.depthFunc(i.NEVER);break;case js:i.depthFunc(i.ALWAYS);break;case $s:i.depthFunc(i.LESS);break;case Ri:i.depthFunc(i.LEQUAL);break;case Zs:i.depthFunc(i.EQUAL);break;case Js:i.depthFunc(i.GEQUAL);break;case Qs:i.depthFunc(i.GREATER);break;case eo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=le}},setLocked:function(le){P=le},setClear:function(le){he!==le&&(re&&(le=1-le),i.clearDepth(le),he=le)},reset:function(){P=!1,G=null,j=null,he=null,re=!1}}}function r(){let P=!1,re=null,G=null,j=null,he=null,le=null,Ue=null,mt=null,bt=null;return{setTest:function(et){P||(et?oe(i.STENCIL_TEST):Te(i.STENCIL_TEST))},setMask:function(et){re!==et&&!P&&(i.stencilMask(et),re=et)},setFunc:function(et,Kt,cn){(G!==et||j!==Kt||he!==cn)&&(i.stencilFunc(et,Kt,cn),G=et,j=Kt,he=cn)},setOp:function(et,Kt,cn){(le!==et||Ue!==Kt||mt!==cn)&&(i.stencilOp(et,Kt,cn),le=et,Ue=Kt,mt=cn)},setLocked:function(et){P=et},setClear:function(et){bt!==et&&(i.clearStencil(et),bt=et)},reset:function(){P=!1,re=null,G=null,j=null,he=null,le=null,Ue=null,mt=null,bt=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,p=[],g=null,x=!1,m=null,f=null,E=null,b=null,S=null,z=null,T=null,R=new Ae(0,0,0),U=0,w=!1,y=null,A=null,B=null,N=null,H=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ee=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=ee>=1):V.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=ee>=2);let se=null,ue={};const we=i.getParameter(i.SCISSOR_BOX),He=i.getParameter(i.VIEWPORT),ot=new st().fromArray(we),X=new st().fromArray(He);function te(P,re,G,j){const he=new Uint8Array(4),le=i.createTexture();i.bindTexture(P,le),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ue=0;Ue<G;Ue++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(re,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,he):i.texImage2D(re+Ue,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,he);return le}const ye={};ye[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),ye[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ye[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),oe(i.DEPTH_TEST),a.setFunc(Ri),Ve(!1),We(la),oe(i.CULL_FACE),D(Dn);function oe(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function Te(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function Ie(P,re){return d[P]!==re?(i.bindFramebuffer(P,re),d[P]=re,P===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=re),P===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=re),!0):!1}function Be(P,re){let G=p,j=!1;if(P){G=u.get(re),G===void 0&&(G=[],u.set(re,G));const he=P.textures;if(G.length!==he.length||G[0]!==i.COLOR_ATTACHMENT0){for(let le=0,Ue=he.length;le<Ue;le++)G[le]=i.COLOR_ATTACHMENT0+le;G.length=he.length,j=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,j=!0);j&&i.drawBuffers(G)}function ft(P){return g!==P?(i.useProgram(P),g=P,!0):!1}const qe={[jn]:i.FUNC_ADD,[hh]:i.FUNC_SUBTRACT,[dh]:i.FUNC_REVERSE_SUBTRACT};qe[uh]=i.MIN,qe[fh]=i.MAX;const gt={[ph]:i.ZERO,[mh]:i.ONE,[gh]:i.SRC_COLOR,[Xs]:i.SRC_ALPHA,[wh]:i.SRC_ALPHA_SATURATE,[vh]:i.DST_COLOR,[xh]:i.DST_ALPHA,[_h]:i.ONE_MINUS_SRC_COLOR,[qs]:i.ONE_MINUS_SRC_ALPHA,[Sh]:i.ONE_MINUS_DST_COLOR,[yh]:i.ONE_MINUS_DST_ALPHA,[Mh]:i.CONSTANT_COLOR,[bh]:i.ONE_MINUS_CONSTANT_COLOR,[Eh]:i.CONSTANT_ALPHA,[Th]:i.ONE_MINUS_CONSTANT_ALPHA};function D(P,re,G,j,he,le,Ue,mt,bt,et){if(P===Dn){x===!0&&(Te(i.BLEND),x=!1);return}if(x===!1&&(oe(i.BLEND),x=!0),P!==ch){if(P!==m||et!==w){if((f!==jn||S!==jn)&&(i.blendEquation(i.FUNC_ADD),f=jn,S=jn),et)switch(P){case bi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ca:i.blendFunc(i.ONE,i.ONE);break;case ha:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case da:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ca:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ha:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case da:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}E=null,b=null,z=null,T=null,R.set(0,0,0),U=0,m=P,w=et}return}he=he||re,le=le||G,Ue=Ue||j,(re!==f||he!==S)&&(i.blendEquationSeparate(qe[re],qe[he]),f=re,S=he),(G!==E||j!==b||le!==z||Ue!==T)&&(i.blendFuncSeparate(gt[G],gt[j],gt[le],gt[Ue]),E=G,b=j,z=le,T=Ue),(mt.equals(R)===!1||bt!==U)&&(i.blendColor(mt.r,mt.g,mt.b,bt),R.copy(mt),U=bt),m=P,w=!1}function Wt(P,re){P.side===on?Te(i.CULL_FACE):oe(i.CULL_FACE);let G=P.side===Ft;re&&(G=!G),Ve(G),P.blending===bi&&P.transparent===!1?D(Dn):D(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const j=P.stencilWrite;o.setTest(j),j&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ct(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):Te(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(P){y!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),y=P)}function We(P){P!==oh?(oe(i.CULL_FACE),P!==A&&(P===la?i.cullFace(i.BACK):P===ah?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Te(i.CULL_FACE),A=P}function be(P){P!==B&&(W&&i.lineWidth(P),B=P)}function ct(P,re,G){P?(oe(i.POLYGON_OFFSET_FILL),(N!==re||H!==G)&&(i.polygonOffset(re,G),N=re,H=G)):Te(i.POLYGON_OFFSET_FILL)}function Me(P){P?oe(i.SCISSOR_TEST):Te(i.SCISSOR_TEST)}function M(P){P===void 0&&(P=i.TEXTURE0+q-1),se!==P&&(i.activeTexture(P),se=P)}function _(P,re,G){G===void 0&&(se===null?G=i.TEXTURE0+q-1:G=se);let j=ue[G];j===void 0&&(j={type:void 0,texture:void 0},ue[G]=j),(j.type!==P||j.texture!==re)&&(se!==G&&(i.activeTexture(G),se=G),i.bindTexture(P,re||ye[P]),j.type=P,j.texture=re)}function k(){const P=ue[se];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ae(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ke(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pe(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Re(P){ot.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),ot.copy(P))}function me(P){X.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),X.copy(P))}function Ye(P,re){let G=c.get(re);G===void 0&&(G=new WeakMap,c.set(re,G));let j=G.get(P);j===void 0&&(j=i.getUniformBlockIndex(re,P.name),G.set(P,j))}function Fe(P,re){const j=c.get(re).get(P);l.get(re)!==j&&(i.uniformBlockBinding(re,j,P.__bindingPointIndex),l.set(re,j))}function at(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},se=null,ue={},d={},u=new WeakMap,p=[],g=null,x=!1,m=null,f=null,E=null,b=null,S=null,z=null,T=null,R=new Ae(0,0,0),U=0,w=!1,y=null,A=null,B=null,N=null,H=null,ot.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:oe,disable:Te,bindFramebuffer:Ie,drawBuffers:Be,useProgram:ft,setBlending:D,setMaterial:Wt,setFlipSided:Ve,setCullFace:We,setLineWidth:be,setPolygonOffset:ct,setScissorTest:Me,activeTexture:M,bindTexture:_,unbindTexture:k,compressedTexImage2D:K,compressedTexImage3D:$,texImage2D:pe,texImage3D:Ee,updateUBOMapping:Ye,uniformBlockBinding:Fe,texStorage2D:Ke,texStorage3D:Z,texSubImage2D:Y,texSubImage3D:ve,compressedTexSubImage2D:ae,compressedTexSubImage3D:fe,scissor:Re,viewport:me,reset:at}}function sl(i,e,t,n){const r=hm(n);switch(t){case Xl:return i*e;case Kl:return i*e;case jl:return i*e*2;case Go:return i*e/r.components*r.byteLength;case Vo:return i*e/r.components*r.byteLength;case $l:return i*e*2/r.components*r.byteLength;case Wo:return i*e*2/r.components*r.byteLength;case ql:return i*e*3/r.components*r.byteLength;case en:return i*e*4/r.components*r.byteLength;case Yo:return i*e*4/r.components*r.byteLength;case Gr:case Vr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Wr:case Yr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case so:case ao:return Math.max(i,16)*Math.max(e,8)/4;case ro:case oo:return Math.max(i,8)*Math.max(e,8)/2;case lo:case co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case po:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case mo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case go:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case _o:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case xo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case yo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case vo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case So:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case wo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Mo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case bo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Eo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Xr:case To:case Ao:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Zl:case Ro:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Co:case Po:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hm(i){switch(i){case vn:case Vl:return{byteLength:1,components:1};case nr:case Wl:case rr:return{byteLength:2,components:1};case Ho:case Bo:return{byteLength:2,components:4};case Qn:case Oo:case ln:return{byteLength:4,components:1};case Yl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function dm(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new De,h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,_){return p?new OffscreenCanvas(M,_):Jr("canvas")}function x(M,_,k){let K=1;const $=Me(M);if(($.width>k||$.height>k)&&(K=k/Math.max($.width,$.height)),K<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const Y=Math.floor(K*$.width),ve=Math.floor(K*$.height);d===void 0&&(d=g(Y,ve));const ae=_?g(Y,ve):d;return ae.width=Y,ae.height=ve,ae.getContext("2d").drawImage(M,0,0,Y,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+Y+"x"+ve+")."),ae}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),M;return M}function m(M){return M.generateMipmaps}function f(M){i.generateMipmap(M)}function E(M){return M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?i.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(M,_,k,K,$=!1){if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let Y=_;if(_===i.RED&&(k===i.FLOAT&&(Y=i.R32F),k===i.HALF_FLOAT&&(Y=i.R16F),k===i.UNSIGNED_BYTE&&(Y=i.R8)),_===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.R8UI),k===i.UNSIGNED_SHORT&&(Y=i.R16UI),k===i.UNSIGNED_INT&&(Y=i.R32UI),k===i.BYTE&&(Y=i.R8I),k===i.SHORT&&(Y=i.R16I),k===i.INT&&(Y=i.R32I)),_===i.RG&&(k===i.FLOAT&&(Y=i.RG32F),k===i.HALF_FLOAT&&(Y=i.RG16F),k===i.UNSIGNED_BYTE&&(Y=i.RG8)),_===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RG8UI),k===i.UNSIGNED_SHORT&&(Y=i.RG16UI),k===i.UNSIGNED_INT&&(Y=i.RG32UI),k===i.BYTE&&(Y=i.RG8I),k===i.SHORT&&(Y=i.RG16I),k===i.INT&&(Y=i.RG32I)),_===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),k===i.UNSIGNED_INT&&(Y=i.RGB32UI),k===i.BYTE&&(Y=i.RGB8I),k===i.SHORT&&(Y=i.RGB16I),k===i.INT&&(Y=i.RGB32I)),_===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),k===i.UNSIGNED_INT&&(Y=i.RGBA32UI),k===i.BYTE&&(Y=i.RGBA8I),k===i.SHORT&&(Y=i.RGBA16I),k===i.INT&&(Y=i.RGBA32I)),_===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),_===i.RGBA){const ve=$?os:je.getTransfer(K);k===i.FLOAT&&(Y=i.RGBA32F),k===i.HALF_FLOAT&&(Y=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Y=ve===nt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function S(M,_){let k;return M?_===null||_===Qn||_===Li?k=i.DEPTH24_STENCIL8:_===ln?k=i.DEPTH32F_STENCIL8:_===nr&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Qn||_===Li?k=i.DEPTH_COMPONENT24:_===ln?k=i.DEPTH_COMPONENT32F:_===nr&&(k=i.DEPTH_COMPONENT16),k}function z(M,_){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==wt&&M.minFilter!==an?Math.log2(Math.max(_.width,_.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?_.mipmaps.length:1}function T(M){const _=M.target;_.removeEventListener("dispose",T),U(_),_.isVideoTexture&&h.delete(_)}function R(M){const _=M.target;_.removeEventListener("dispose",R),y(_)}function U(M){const _=n.get(M);if(_.__webglInit===void 0)return;const k=M.source,K=u.get(k);if(K){const $=K[_.__cacheKey];$.usedTimes--,$.usedTimes===0&&w(M),Object.keys(K).length===0&&u.delete(k)}n.remove(M)}function w(M){const _=n.get(M);i.deleteTexture(_.__webglTexture);const k=M.source,K=u.get(k);delete K[_.__cacheKey],a.memory.textures--}function y(M){const _=n.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),n.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(_.__webglFramebuffer[K]))for(let $=0;$<_.__webglFramebuffer[K].length;$++)i.deleteFramebuffer(_.__webglFramebuffer[K][$]);else i.deleteFramebuffer(_.__webglFramebuffer[K]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[K])}else{if(Array.isArray(_.__webglFramebuffer))for(let K=0;K<_.__webglFramebuffer.length;K++)i.deleteFramebuffer(_.__webglFramebuffer[K]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let K=0;K<_.__webglColorRenderbuffer.length;K++)_.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[K]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const k=M.textures;for(let K=0,$=k.length;K<$;K++){const Y=n.get(k[K]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(k[K])}n.remove(M)}let A=0;function B(){A=0}function N(){const M=A;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),A+=1,M}function H(M){const _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.wrapR||0),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.colorSpace),_.join()}function q(M,_){const k=n.get(M);if(M.isVideoTexture&&be(M),M.isRenderTargetTexture===!1&&M.version>0&&k.__version!==M.version){const K=M.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(k,M,_);return}}t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+_)}function W(M,_){const k=n.get(M);if(M.version>0&&k.__version!==M.version){X(k,M,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+_)}function ee(M,_){const k=n.get(M);if(M.version>0&&k.__version!==M.version){X(k,M,_);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+_)}function V(M,_){const k=n.get(M);if(M.version>0&&k.__version!==M.version){te(k,M,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+_)}const se={[$r]:i.REPEAT,[Zn]:i.CLAMP_TO_EDGE,[io]:i.MIRRORED_REPEAT},ue={[wt]:i.NEAREST,[Gl]:i.NEAREST_MIPMAP_NEAREST,[hr]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[hs]:i.LINEAR_MIPMAP_NEAREST,[Jn]:i.LINEAR_MIPMAP_LINEAR},we={[Oh]:i.NEVER,[Yh]:i.ALWAYS,[Hh]:i.LESS,[Jl]:i.LEQUAL,[Bh]:i.EQUAL,[Wh]:i.GEQUAL,[Gh]:i.GREATER,[Vh]:i.NOTEQUAL};function He(M,_){if(_.type===ln&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===an||_.magFilter===hs||_.magFilter===hr||_.magFilter===Jn||_.minFilter===an||_.minFilter===hs||_.minFilter===hr||_.minFilter===Jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(M,i.TEXTURE_WRAP_S,se[_.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,se[_.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,se[_.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,ue[_.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,ue[_.minFilter]),_.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,we[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===wt||_.minFilter!==hr&&_.minFilter!==Jn||_.type===ln&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(M,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ot(M,_){let k=!1;M.__webglInit===void 0&&(M.__webglInit=!0,_.addEventListener("dispose",T));const K=_.source;let $=u.get(K);$===void 0&&($={},u.set(K,$));const Y=H(_);if(Y!==M.__cacheKey){$[Y]===void 0&&($[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),$[Y].usedTimes++;const ve=$[M.__cacheKey];ve!==void 0&&($[M.__cacheKey].usedTimes--,ve.usedTimes===0&&w(_)),M.__cacheKey=Y,M.__webglTexture=$[Y].texture}return k}function X(M,_,k){let K=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(K=i.TEXTURE_3D);const $=ot(M,_),Y=_.source;t.bindTexture(K,M.__webglTexture,i.TEXTURE0+k);const ve=n.get(Y);if(Y.version!==ve.__version||$===!0){t.activeTexture(i.TEXTURE0+k);const ae=je.getPrimaries(je.workingColorSpace),fe=_.colorSpace===In?null:je.getPrimaries(_.colorSpace),Ke=_.colorSpace===In||ae===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let Z=x(_.image,!1,r.maxTextureSize);Z=ct(_,Z);const pe=s.convert(_.format,_.colorSpace),Ee=s.convert(_.type);let Re=b(_.internalFormat,pe,Ee,_.colorSpace,_.isVideoTexture);He(K,_);let me;const Ye=_.mipmaps,Fe=_.isVideoTexture!==!0,at=ve.__version===void 0||$===!0,P=Y.dataReady,re=z(_,Z);if(_.isDepthTexture)Re=S(_.format===Ii,_.type),at&&(Fe?t.texStorage2D(i.TEXTURE_2D,1,Re,Z.width,Z.height):t.texImage2D(i.TEXTURE_2D,0,Re,Z.width,Z.height,0,pe,Ee,null));else if(_.isDataTexture)if(Ye.length>0){Fe&&at&&t.texStorage2D(i.TEXTURE_2D,re,Re,Ye[0].width,Ye[0].height);for(let G=0,j=Ye.length;G<j;G++)me=Ye[G],Fe?P&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,me.width,me.height,pe,Ee,me.data):t.texImage2D(i.TEXTURE_2D,G,Re,me.width,me.height,0,pe,Ee,me.data);_.generateMipmaps=!1}else Fe?(at&&t.texStorage2D(i.TEXTURE_2D,re,Re,Z.width,Z.height),P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Z.width,Z.height,pe,Ee,Z.data)):t.texImage2D(i.TEXTURE_2D,0,Re,Z.width,Z.height,0,pe,Ee,Z.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Fe&&at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,re,Re,Ye[0].width,Ye[0].height,Z.depth);for(let G=0,j=Ye.length;G<j;G++)if(me=Ye[G],_.format!==en)if(pe!==null)if(Fe){if(P)if(_.layerUpdates.size>0){const he=sl(me.width,me.height,_.format,_.type);for(const le of _.layerUpdates){const Ue=me.data.subarray(le*he/me.data.BYTES_PER_ELEMENT,(le+1)*he/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,le,me.width,me.height,1,pe,Ue)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,me.width,me.height,Z.depth,pe,me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,Re,me.width,me.height,Z.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?P&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,me.width,me.height,Z.depth,pe,Ee,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,G,Re,me.width,me.height,Z.depth,0,pe,Ee,me.data)}else{Fe&&at&&t.texStorage2D(i.TEXTURE_2D,re,Re,Ye[0].width,Ye[0].height);for(let G=0,j=Ye.length;G<j;G++)me=Ye[G],_.format!==en?pe!==null?Fe?P&&t.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(i.TEXTURE_2D,G,Re,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?P&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,me.width,me.height,pe,Ee,me.data):t.texImage2D(i.TEXTURE_2D,G,Re,me.width,me.height,0,pe,Ee,me.data)}else if(_.isDataArrayTexture)if(Fe){if(at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,re,Re,Z.width,Z.height,Z.depth),P)if(_.layerUpdates.size>0){const G=sl(Z.width,Z.height,_.format,_.type);for(const j of _.layerUpdates){const he=Z.data.subarray(j*G/Z.data.BYTES_PER_ELEMENT,(j+1)*G/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,Z.width,Z.height,1,pe,Ee,he)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,pe,Ee,Z.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Re,Z.width,Z.height,Z.depth,0,pe,Ee,Z.data);else if(_.isData3DTexture)Fe?(at&&t.texStorage3D(i.TEXTURE_3D,re,Re,Z.width,Z.height,Z.depth),P&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,pe,Ee,Z.data)):t.texImage3D(i.TEXTURE_3D,0,Re,Z.width,Z.height,Z.depth,0,pe,Ee,Z.data);else if(_.isFramebufferTexture){if(at)if(Fe)t.texStorage2D(i.TEXTURE_2D,re,Re,Z.width,Z.height);else{let G=Z.width,j=Z.height;for(let he=0;he<re;he++)t.texImage2D(i.TEXTURE_2D,he,Re,G,j,0,pe,Ee,null),G>>=1,j>>=1}}else if(Ye.length>0){if(Fe&&at){const G=Me(Ye[0]);t.texStorage2D(i.TEXTURE_2D,re,Re,G.width,G.height)}for(let G=0,j=Ye.length;G<j;G++)me=Ye[G],Fe?P&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,pe,Ee,me):t.texImage2D(i.TEXTURE_2D,G,Re,pe,Ee,me);_.generateMipmaps=!1}else if(Fe){if(at){const G=Me(Z);t.texStorage2D(i.TEXTURE_2D,re,Re,G.width,G.height)}P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,Ee,Z)}else t.texImage2D(i.TEXTURE_2D,0,Re,pe,Ee,Z);m(_)&&f(K),ve.__version=Y.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function te(M,_,k){if(_.image.length!==6)return;const K=ot(M,_),$=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+k);const Y=n.get($);if($.version!==Y.__version||K===!0){t.activeTexture(i.TEXTURE0+k);const ve=je.getPrimaries(je.workingColorSpace),ae=_.colorSpace===In?null:je.getPrimaries(_.colorSpace),fe=_.colorSpace===In||ve===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Ke=_.isCompressedTexture||_.image[0].isCompressedTexture,Z=_.image[0]&&_.image[0].isDataTexture,pe=[];for(let j=0;j<6;j++)!Ke&&!Z?pe[j]=x(_.image[j],!0,r.maxCubemapSize):pe[j]=Z?_.image[j].image:_.image[j],pe[j]=ct(_,pe[j]);const Ee=pe[0],Re=s.convert(_.format,_.colorSpace),me=s.convert(_.type),Ye=b(_.internalFormat,Re,me,_.colorSpace),Fe=_.isVideoTexture!==!0,at=Y.__version===void 0||K===!0,P=$.dataReady;let re=z(_,Ee);He(i.TEXTURE_CUBE_MAP,_);let G;if(Ke){Fe&&at&&t.texStorage2D(i.TEXTURE_CUBE_MAP,re,Ye,Ee.width,Ee.height);for(let j=0;j<6;j++){G=pe[j].mipmaps;for(let he=0;he<G.length;he++){const le=G[he];_.format!==en?Re!==null?Fe?P&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,he,0,0,le.width,le.height,Re,le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,he,Ye,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,he,0,0,le.width,le.height,Re,me,le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,he,Ye,le.width,le.height,0,Re,me,le.data)}}}else{if(G=_.mipmaps,Fe&&at){G.length>0&&re++;const j=Me(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,re,Ye,j.width,j.height)}for(let j=0;j<6;j++)if(Z){Fe?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,pe[j].width,pe[j].height,Re,me,pe[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ye,pe[j].width,pe[j].height,0,Re,me,pe[j].data);for(let he=0;he<G.length;he++){const Ue=G[he].image[j].image;Fe?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,he+1,0,0,Ue.width,Ue.height,Re,me,Ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,he+1,Ye,Ue.width,Ue.height,0,Re,me,Ue.data)}}else{Fe?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Re,me,pe[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ye,Re,me,pe[j]);for(let he=0;he<G.length;he++){const le=G[he];Fe?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,he+1,0,0,Re,me,le.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,he+1,Ye,Re,me,le.image[j])}}}m(_)&&f(i.TEXTURE_CUBE_MAP),Y.__version=$.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function ye(M,_,k,K,$,Y){const ve=s.convert(k.format,k.colorSpace),ae=s.convert(k.type),fe=b(k.internalFormat,ve,ae,k.colorSpace),Ke=n.get(_),Z=n.get(k);if(Z.__renderTarget=_,!Ke.__hasExternalTextures){const pe=Math.max(1,_.width>>Y),Ee=Math.max(1,_.height>>Y);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,Y,fe,pe,Ee,_.depth,0,ve,ae,null):t.texImage2D($,Y,fe,pe,Ee,0,ve,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,M),We(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,$,Z.__webglTexture,0,Ve(_)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,$,Z.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(M,_,k){if(i.bindRenderbuffer(i.RENDERBUFFER,M),_.depthBuffer){const K=_.depthTexture,$=K&&K.isDepthTexture?K.type:null,Y=S(_.stencilBuffer,$),ve=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=Ve(_);We(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,Y,_.width,_.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,Y,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Y,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,M)}else{const K=_.textures;for(let $=0;$<K.length;$++){const Y=K[$],ve=s.convert(Y.format,Y.colorSpace),ae=s.convert(Y.type),fe=b(Y.internalFormat,ve,ae,Y.colorSpace),Ke=Ve(_);k&&We(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ke,fe,_.width,_.height):We(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ke,fe,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,fe,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(M,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(_.depthTexture);K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q(_.depthTexture,0);const $=K.__webglTexture,Y=Ve(_);if(_.depthTexture.format===Ei)We(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(_.depthTexture.format===Ii)We(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Ie(M){const _=n.get(M),k=M.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==M.depthTexture){const K=M.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),K){const $=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,K.removeEventListener("dispose",$)};K.addEventListener("dispose",$),_.__depthDisposeCallback=$}_.__boundDepthTexture=K}if(M.depthTexture&&!_.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Te(_.__webglFramebuffer,M)}else if(k){_.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[K]),_.__webglDepthbuffer[K]===void 0)_.__webglDepthbuffer[K]=i.createRenderbuffer(),oe(_.__webglDepthbuffer[K],M,!1);else{const $=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),oe(_.__webglDepthbuffer,M,!1);else{const K=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,$)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(M,_,k){const K=n.get(M);_!==void 0&&ye(K.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Ie(M)}function ft(M){const _=M.texture,k=n.get(M),K=n.get(_);M.addEventListener("dispose",R);const $=M.textures,Y=M.isWebGLCubeRenderTarget===!0,ve=$.length>1;if(ve||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=_.version,a.memory.textures++),Y){k.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer[ae]=[];for(let fe=0;fe<_.mipmaps.length;fe++)k.__webglFramebuffer[ae][fe]=i.createFramebuffer()}else k.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer=[];for(let ae=0;ae<_.mipmaps.length;ae++)k.__webglFramebuffer[ae]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(ve)for(let ae=0,fe=$.length;ae<fe;ae++){const Ke=n.get($[ae]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=i.createTexture(),a.memory.textures++)}if(M.samples>0&&We(M)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ae=0;ae<$.length;ae++){const fe=$[ae];k.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[ae]);const Ke=s.convert(fe.format,fe.colorSpace),Z=s.convert(fe.type),pe=b(fe.internalFormat,Ke,Z,fe.colorSpace,M.isXRRenderTarget===!0),Ee=Ve(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,pe,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,k.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),oe(k.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),He(i.TEXTURE_CUBE_MAP,_);for(let ae=0;ae<6;ae++)if(_.mipmaps&&_.mipmaps.length>0)for(let fe=0;fe<_.mipmaps.length;fe++)ye(k.__webglFramebuffer[ae][fe],M,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,fe);else ye(k.__webglFramebuffer[ae],M,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(_)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let ae=0,fe=$.length;ae<fe;ae++){const Ke=$[ae],Z=n.get(Ke);t.bindTexture(i.TEXTURE_2D,Z.__webglTexture),He(i.TEXTURE_2D,Ke),ye(k.__webglFramebuffer,M,Ke,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,0),m(Ke)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ae=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,K.__webglTexture),He(ae,_),_.mipmaps&&_.mipmaps.length>0)for(let fe=0;fe<_.mipmaps.length;fe++)ye(k.__webglFramebuffer[fe],M,_,i.COLOR_ATTACHMENT0,ae,fe);else ye(k.__webglFramebuffer,M,_,i.COLOR_ATTACHMENT0,ae,0);m(_)&&f(ae),t.unbindTexture()}M.depthBuffer&&Ie(M)}function qe(M){const _=M.textures;for(let k=0,K=_.length;k<K;k++){const $=_[k];if(m($)){const Y=E(M),ve=n.get($).__webglTexture;t.bindTexture(Y,ve),f(Y),t.unbindTexture()}}}const gt=[],D=[];function Wt(M){if(M.samples>0){if(We(M)===!1){const _=M.textures,k=M.width,K=M.height;let $=i.COLOR_BUFFER_BIT;const Y=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(M),ae=_.length>1;if(ae)for(let fe=0;fe<_.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let fe=0;fe<_.length;fe++){if(M.resolveDepthBuffer&&(M.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[fe]);const Ke=n.get(_[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ke,0)}i.blitFramebuffer(0,0,k,K,0,0,k,K,$,i.NEAREST),l===!0&&(gt.length=0,D.length=0,gt.push(i.COLOR_ATTACHMENT0+fe),M.depthBuffer&&M.resolveDepthBuffer===!1&&(gt.push(Y),D.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,gt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ae)for(let fe=0;fe<_.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,ve.__webglColorRenderbuffer[fe]);const Ke=n.get(_[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,Ke,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const _=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Ve(M){return Math.min(r.maxSamples,M.samples)}function We(M){const _=n.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function be(M){const _=a.render.frame;h.get(M)!==_&&(h.set(M,_),M.update())}function ct(M,_){const k=M.colorSpace,K=M.format,$=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||k!==Ui&&k!==In&&(je.getTransfer(k)===nt?(K!==en||$!==vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),_}function Me(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=B,this.setTexture2D=q,this.setTexture2DArray=W,this.setTexture3D=ee,this.setTextureCube=V,this.rebindTextures=Be,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=We}function um(i,e){function t(n,r=In){let s;const a=je.getTransfer(r);if(n===vn)return i.UNSIGNED_BYTE;if(n===Ho)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Bo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Yl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Vl)return i.BYTE;if(n===Wl)return i.SHORT;if(n===nr)return i.UNSIGNED_SHORT;if(n===Oo)return i.INT;if(n===Qn)return i.UNSIGNED_INT;if(n===ln)return i.FLOAT;if(n===rr)return i.HALF_FLOAT;if(n===Xl)return i.ALPHA;if(n===ql)return i.RGB;if(n===en)return i.RGBA;if(n===Kl)return i.LUMINANCE;if(n===jl)return i.LUMINANCE_ALPHA;if(n===Ei)return i.DEPTH_COMPONENT;if(n===Ii)return i.DEPTH_STENCIL;if(n===Go)return i.RED;if(n===Vo)return i.RED_INTEGER;if(n===$l)return i.RG;if(n===Wo)return i.RG_INTEGER;if(n===Yo)return i.RGBA_INTEGER;if(n===Gr||n===Vr||n===Wr||n===Yr)if(a===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Gr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Yr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Gr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Yr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ro||n===so||n===oo||n===ao)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ro)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===so)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===oo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ao)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===lo||n===co||n===ho)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===lo||n===co)return a===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ho)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===uo||n===fo||n===po||n===mo||n===go||n===_o||n===xo||n===yo||n===vo||n===So||n===wo||n===Mo||n===bo||n===Eo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===uo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===po)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===mo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===go)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_o)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===So)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Mo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===bo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Eo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xr||n===To||n===Ao)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Xr)return a===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===To)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ao)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zl||n===Ro||n===Co||n===Po)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Xr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ro)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Co)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Po)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Li?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class fm extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Pe extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pm={type:"move"};class ks{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pm)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Pe;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const mm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _m{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Ct,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new kn({vertexShader:mm,fragmentShader:gm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ge(new sr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xm extends zi{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null;const x=new _m,m=t.getContextAttributes();let f=null,E=null;const b=[],S=[],z=new De;let T=null;const R=new Vt;R.viewport=new st;const U=new Vt;U.viewport=new st;const w=[R,U],y=new fm;let A=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let te=b[X];return te===void 0&&(te=new ks,b[X]=te),te.getTargetRaySpace()},this.getControllerGrip=function(X){let te=b[X];return te===void 0&&(te=new ks,b[X]=te),te.getGripSpace()},this.getHand=function(X){let te=b[X];return te===void 0&&(te=new ks,b[X]=te),te.getHandSpace()};function N(X){const te=S.indexOf(X.inputSource);if(te===-1)return;const ye=b[te];ye!==void 0&&(ye.update(X.inputSource,X.frame,c||a),ye.dispatchEvent({type:X.type,data:X.inputSource}))}function H(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",q);for(let X=0;X<b.length;X++){const te=S[X];te!==null&&(S[X]=null,b[X].disconnect(te))}A=null,B=null,x.reset(),e.setRenderTarget(f),p=null,u=null,d=null,r=null,E=null,ot.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(z.width,z.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",H),r.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(z),r.renderState.layers===void 0){const te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Nn(p.framebufferWidth,p.framebufferHeight,{format:en,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,ye=null,oe=null;m.depth&&(oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=m.stencil?Ii:Ei,ye=m.stencil?Li:Qn);const Te={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};d=new XRWebGLBinding(r,t),u=d.createProjectionLayer(Te),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),E=new Nn(u.textureWidth,u.textureHeight,{format:en,type:vn,depthTexture:new uc(u.textureWidth,u.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ot.setContext(r),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function q(X){for(let te=0;te<X.removed.length;te++){const ye=X.removed[te],oe=S.indexOf(ye);oe>=0&&(S[oe]=null,b[oe].disconnect(ye))}for(let te=0;te<X.added.length;te++){const ye=X.added[te];let oe=S.indexOf(ye);if(oe===-1){for(let Ie=0;Ie<b.length;Ie++)if(Ie>=S.length){S.push(ye),oe=Ie;break}else if(S[Ie]===null){S[Ie]=ye,oe=Ie;break}if(oe===-1)break}const Te=b[oe];Te&&Te.connect(ye)}}const W=new C,ee=new C;function V(X,te,ye){W.setFromMatrixPosition(te.matrixWorld),ee.setFromMatrixPosition(ye.matrixWorld);const oe=W.distanceTo(ee),Te=te.projectionMatrix.elements,Ie=ye.projectionMatrix.elements,Be=Te[14]/(Te[10]-1),ft=Te[14]/(Te[10]+1),qe=(Te[9]+1)/Te[5],gt=(Te[9]-1)/Te[5],D=(Te[8]-1)/Te[0],Wt=(Ie[8]+1)/Ie[0],Ve=Be*D,We=Be*Wt,be=oe/(-D+Wt),ct=be*-D;if(te.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ct),X.translateZ(be),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Te[10]===-1)X.projectionMatrix.copy(te.projectionMatrix),X.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const Me=Be+be,M=ft+be,_=Ve-ct,k=We+(oe-ct),K=qe*ft/M*Me,$=gt*ft/M*Me;X.projectionMatrix.makePerspective(_,k,K,$,Me,M),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function se(X,te){te===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(te.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let te=X.near,ye=X.far;x.texture!==null&&(x.depthNear>0&&(te=x.depthNear),x.depthFar>0&&(ye=x.depthFar)),y.near=U.near=R.near=te,y.far=U.far=R.far=ye,(A!==y.near||B!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),A=y.near,B=y.far),R.layers.mask=X.layers.mask|2,U.layers.mask=X.layers.mask|4,y.layers.mask=R.layers.mask|U.layers.mask;const oe=X.parent,Te=y.cameras;se(y,oe);for(let Ie=0;Ie<Te.length;Ie++)se(Te[Ie],oe);Te.length===2?V(y,R,U):y.projectionMatrix.copy(R.projectionMatrix),ue(X,y,oe)};function ue(X,te,ye){ye===null?X.matrix.copy(te.matrixWorld):(X.matrix.copy(ye.matrixWorld),X.matrix.invert(),X.matrix.multiply(te.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(te.projectionMatrix),X.projectionMatrixInverse.copy(te.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ir*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(X){l=X,u!==null&&(u.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let we=null;function He(X,te){if(h=te.getViewerPose(c||a),g=te,h!==null){const ye=h.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let oe=!1;ye.length!==y.cameras.length&&(y.cameras.length=0,oe=!0);for(let Ie=0;Ie<ye.length;Ie++){const Be=ye[Ie];let ft=null;if(p!==null)ft=p.getViewport(Be);else{const gt=d.getViewSubImage(u,Be);ft=gt.viewport,Ie===0&&(e.setRenderTargetTextures(E,gt.colorTexture,u.ignoreDepthValues?void 0:gt.depthStencilTexture),e.setRenderTarget(E))}let qe=w[Ie];qe===void 0&&(qe=new Vt,qe.layers.enable(Ie),qe.viewport=new st,w[Ie]=qe),qe.matrix.fromArray(Be.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(Be.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(ft.x,ft.y,ft.width,ft.height),Ie===0&&(y.matrix.copy(qe.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),oe===!0&&y.cameras.push(qe)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Ie=d.getDepthInformation(ye[0]);Ie&&Ie.isValid&&Ie.texture&&x.init(e,Ie,r.renderState)}}for(let ye=0;ye<b.length;ye++){const oe=S[ye],Te=b[ye];oe!==null&&Te!==void 0&&Te.update(oe,te,c||a)}we&&we(X,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}const ot=new hc;ot.setAnimationLoop(He),this.setAnimationLoop=function(X){we=X},this.dispose=function(){}}}const Yn=new zt,ym=new Ze;function vm(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,ac(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,E,b,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),x(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,E,b):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ft&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ft&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const E=e.get(f),b=E.envMap,S=E.envMapRotation;b&&(m.envMap.value=b,Yn.copy(S),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),m.envMapRotation.value.setFromMatrix4(ym.makeRotationFromEuler(Yn)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,E,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=b*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ft&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const E=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Sm(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,b){const S=b.program;n.uniformBlockBinding(E,S)}function c(E,b){let S=r[E.id];S===void 0&&(g(E),S=h(E),r[E.id]=S,E.addEventListener("dispose",m));const z=b.program;n.updateUBOMapping(E,z);const T=e.render.frame;s[E.id]!==T&&(u(E),s[E.id]=T)}function h(E){const b=d();E.__bindingPointIndex=b;const S=i.createBuffer(),z=E.__size,T=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,z,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function d(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(E){const b=r[E.id],S=E.uniforms,z=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let T=0,R=S.length;T<R;T++){const U=Array.isArray(S[T])?S[T]:[S[T]];for(let w=0,y=U.length;w<y;w++){const A=U[w];if(p(A,T,w,z)===!0){const B=A.__offset,N=Array.isArray(A.value)?A.value:[A.value];let H=0;for(let q=0;q<N.length;q++){const W=N[q],ee=x(W);typeof W=="number"||typeof W=="boolean"?(A.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,B+H,A.__data)):W.isMatrix3?(A.__data[0]=W.elements[0],A.__data[1]=W.elements[1],A.__data[2]=W.elements[2],A.__data[3]=0,A.__data[4]=W.elements[3],A.__data[5]=W.elements[4],A.__data[6]=W.elements[5],A.__data[7]=0,A.__data[8]=W.elements[6],A.__data[9]=W.elements[7],A.__data[10]=W.elements[8],A.__data[11]=0):(W.toArray(A.__data,H),H+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,b,S,z){const T=E.value,R=b+"_"+S;if(z[R]===void 0)return typeof T=="number"||typeof T=="boolean"?z[R]=T:z[R]=T.clone(),!0;{const U=z[R];if(typeof T=="number"||typeof T=="boolean"){if(U!==T)return z[R]=T,!0}else if(U.equals(T)===!1)return U.copy(T),!0}return!1}function g(E){const b=E.uniforms;let S=0;const z=16;for(let R=0,U=b.length;R<U;R++){const w=Array.isArray(b[R])?b[R]:[b[R]];for(let y=0,A=w.length;y<A;y++){const B=w[y],N=Array.isArray(B.value)?B.value:[B.value];for(let H=0,q=N.length;H<q;H++){const W=N[H],ee=x(W),V=S%z,se=V%ee.boundary,ue=V+se;S+=se,ue!==0&&z-ue<ee.storage&&(S+=z-ue),B.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=S,S+=ee.storage}}}const T=S%z;return T>0&&(S+=z-T),E.__size=S,E.__cache={},this}function x(E){const b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function m(E){const b=E.target;b.removeEventListener("dispose",m);const S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function f(){for(const E in r)i.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}class kg{constructor(e={}){const{canvas:t=cd(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,f=null;const E=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rt,this.toneMapping=Un,this.toneMappingExposure=1;const S=this;let z=!1,T=0,R=0,U=null,w=-1,y=null;const A=new st,B=new st;let N=null;const H=new Ae(0);let q=0,W=t.width,ee=t.height,V=1,se=null,ue=null;const we=new st(0,0,W,ee),He=new st(0,0,W,ee);let ot=!1;const X=new qo;let te=!1,ye=!1;const oe=new Ze,Te=new Ze,Ie=new C,Be=new st,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function gt(){return U===null?V:1}let D=n;function Wt(v,L){return t.getContext(v,L)}try{const v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fo}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",le,!1),D===null){const L="webgl2";if(D=Wt(L,v),D===null)throw Wt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Ve,We,be,ct,Me,M,_,k,K,$,Y,ve,ae,fe,Ke,Z,pe,Ee,Re,me,Ye,Fe,at,P;function re(){Ve=new A0(D),Ve.init(),Fe=new um(D,Ve),We=new S0(D,Ve,e,Fe),be=new cm(D,Ve),We.reverseDepthBuffer&&u&&be.buffers.depth.setReversed(!0),ct=new P0(D),Me=new Kp,M=new dm(D,Ve,be,Me,We,Fe,ct),_=new M0(S),k=new T0(S),K=new Nd(D),at=new y0(D,K),$=new R0(D,K,ct,at),Y=new I0(D,$,K,ct),Re=new L0(D,We,M),Z=new w0(Me),ve=new qp(S,_,k,Ve,We,at,Z),ae=new vm(S,Me),fe=new $p,Ke=new nm(Ve),Ee=new x0(S,_,k,be,Y,p,l),pe=new am(S,Y,We),P=new Sm(D,ct,We,be),me=new v0(D,Ve,ct),Ye=new C0(D,Ve,ct),ct.programs=ve.programs,S.capabilities=We,S.extensions=Ve,S.properties=Me,S.renderLists=fe,S.shadowMap=pe,S.state=be,S.info=ct}re();const G=new xm(S,D);this.xr=G,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const v=Ve.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Ve.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(v){v!==void 0&&(V=v,this.setSize(W,ee,!1))},this.getSize=function(v){return v.set(W,ee)},this.setSize=function(v,L,F=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=v,ee=L,t.width=Math.floor(v*V),t.height=Math.floor(L*V),F===!0&&(t.style.width=v+"px",t.style.height=L+"px"),this.setViewport(0,0,v,L)},this.getDrawingBufferSize=function(v){return v.set(W*V,ee*V).floor()},this.setDrawingBufferSize=function(v,L,F){W=v,ee=L,V=F,t.width=Math.floor(v*F),t.height=Math.floor(L*F),this.setViewport(0,0,v,L)},this.getCurrentViewport=function(v){return v.copy(A)},this.getViewport=function(v){return v.copy(we)},this.setViewport=function(v,L,F,O){v.isVector4?we.set(v.x,v.y,v.z,v.w):we.set(v,L,F,O),be.viewport(A.copy(we).multiplyScalar(V).round())},this.getScissor=function(v){return v.copy(He)},this.setScissor=function(v,L,F,O){v.isVector4?He.set(v.x,v.y,v.z,v.w):He.set(v,L,F,O),be.scissor(B.copy(He).multiplyScalar(V).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(v){be.setScissorTest(ot=v)},this.setOpaqueSort=function(v){se=v},this.setTransparentSort=function(v){ue=v},this.getClearColor=function(v){return v.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(v=!0,L=!0,F=!0){let O=0;if(v){let I=!1;if(U!==null){const J=U.texture.format;I=J===Yo||J===Wo||J===Vo}if(I){const J=U.texture.type,ce=J===vn||J===Qn||J===nr||J===Li||J===Ho||J===Bo,ge=Ee.getClearColor(),_e=Ee.getClearAlpha(),Ce=ge.r,ze=ge.g,xe=ge.b;ce?(g[0]=Ce,g[1]=ze,g[2]=xe,g[3]=_e,D.clearBufferuiv(D.COLOR,0,g)):(x[0]=Ce,x[1]=ze,x[2]=xe,x[3]=_e,D.clearBufferiv(D.COLOR,0,x))}else O|=D.COLOR_BUFFER_BIT}L&&(O|=D.DEPTH_BUFFER_BIT),F&&(O|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",le,!1),fe.dispose(),Ke.dispose(),Me.dispose(),_.dispose(),k.dispose(),Y.dispose(),at.dispose(),P.dispose(),ve.dispose(),G.dispose(),G.removeEventListener("sessionstart",ea),G.removeEventListener("sessionend",ta),On.stop()};function j(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const v=ct.autoReset,L=pe.enabled,F=pe.autoUpdate,O=pe.needsUpdate,I=pe.type;re(),ct.autoReset=v,pe.enabled=L,pe.autoUpdate=F,pe.needsUpdate=O,pe.type=I}function le(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Ue(v){const L=v.target;L.removeEventListener("dispose",Ue),mt(L)}function mt(v){bt(v),Me.remove(v)}function bt(v){const L=Me.get(v).programs;L!==void 0&&(L.forEach(function(F){ve.releaseProgram(F)}),v.isShaderMaterial&&ve.releaseShaderCache(v))}this.renderBufferDirect=function(v,L,F,O,I,J){L===null&&(L=ft);const ce=I.isMesh&&I.matrixWorld.determinant()<0,ge=eh(v,L,F,O,I);be.setMaterial(O,ce);let _e=F.index,Ce=1;if(O.wireframe===!0){if(_e=$.getWireframeAttribute(F),_e===void 0)return;Ce=2}const ze=F.drawRange,xe=F.attributes.position;let $e=ze.start*Ce,lt=(ze.start+ze.count)*Ce;J!==null&&($e=Math.max($e,J.start*Ce),lt=Math.min(lt,(J.start+J.count)*Ce)),_e!==null?($e=Math.max($e,0),lt=Math.min(lt,_e.count)):xe!=null&&($e=Math.max($e,0),lt=Math.min(lt,xe.count));const ht=lt-$e;if(ht<0||ht===1/0)return;at.setup(I,O,ge,F,_e);let Nt,Je=me;if(_e!==null&&(Nt=K.get(_e),Je=Ye,Je.setIndex(Nt)),I.isMesh)O.wireframe===!0?(be.setLineWidth(O.wireframeLinewidth*gt()),Je.setMode(D.LINES)):Je.setMode(D.TRIANGLES);else if(I.isLine){let Se=O.linewidth;Se===void 0&&(Se=1),be.setLineWidth(Se*gt()),I.isLineSegments?Je.setMode(D.LINES):I.isLineLoop?Je.setMode(D.LINE_LOOP):Je.setMode(D.LINE_STRIP)}else I.isPoints?Je.setMode(D.POINTS):I.isSprite&&Je.setMode(D.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Je.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))Je.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const Se=I._multiDrawStarts,hn=I._multiDrawCounts,Qe=I._multiDrawCount,jt=_e?K.get(_e).bytesPerElement:1,ti=Me.get(O).currentProgram.getUniforms();for(let Ht=0;Ht<Qe;Ht++)ti.setValue(D,"_gl_DrawID",Ht),Je.render(Se[Ht]/jt,hn[Ht])}else if(I.isInstancedMesh)Je.renderInstances($e,ht,I.count);else if(F.isInstancedBufferGeometry){const Se=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,hn=Math.min(F.instanceCount,Se);Je.renderInstances($e,ht,hn)}else Je.render($e,ht)};function et(v,L,F){v.transparent===!0&&v.side===on&&v.forceSinglePass===!1?(v.side=Ft,v.needsUpdate=!0,cr(v,L,F),v.side=zn,v.needsUpdate=!0,cr(v,L,F),v.side=on):cr(v,L,F)}this.compile=function(v,L,F=null){F===null&&(F=v),f=Ke.get(F),f.init(L),b.push(f),F.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),v!==F&&v.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),f.setupLights();const O=new Set;return v.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const J=I.material;if(J)if(Array.isArray(J))for(let ce=0;ce<J.length;ce++){const ge=J[ce];et(ge,F,I),O.add(ge)}else et(J,F,I),O.add(J)}),b.pop(),f=null,O},this.compileAsync=function(v,L,F=null){const O=this.compile(v,L,F);return new Promise(I=>{function J(){if(O.forEach(function(ce){Me.get(ce).currentProgram.isReady()&&O.delete(ce)}),O.size===0){I(v);return}setTimeout(J,10)}Ve.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let Kt=null;function cn(v){Kt&&Kt(v)}function ea(){On.stop()}function ta(){On.start()}const On=new hc;On.setAnimationLoop(cn),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(v){Kt=v,G.setAnimationLoop(v),v===null?On.stop():On.start()},G.addEventListener("sessionstart",ea),G.addEventListener("sessionend",ta),this.render=function(v,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(L),L=G.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,L,U),f=Ke.get(v,b.length),f.init(L),b.push(f),Te.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),X.setFromProjectionMatrix(Te),ye=this.localClippingEnabled,te=Z.init(this.clippingPlanes,ye),m=fe.get(v,E.length),m.init(),E.push(m),G.enabled===!0&&G.isPresenting===!0){const J=S.xr.getDepthSensingMesh();J!==null&&cs(J,L,-1/0,S.sortObjects)}cs(v,L,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(se,ue),qe=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,qe&&Ee.addToRenderList(m,v),this.info.render.frame++,te===!0&&Z.beginShadows();const F=f.state.shadowsArray;pe.render(F,v,L),te===!0&&Z.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=m.opaque,I=m.transmissive;if(f.setupLights(),L.isArrayCamera){const J=L.cameras;if(I.length>0)for(let ce=0,ge=J.length;ce<ge;ce++){const _e=J[ce];ia(O,I,v,_e)}qe&&Ee.render(v);for(let ce=0,ge=J.length;ce<ge;ce++){const _e=J[ce];na(m,v,_e,_e.viewport)}}else I.length>0&&ia(O,I,v,L),qe&&Ee.render(v),na(m,v,L);U!==null&&(M.updateMultisampleRenderTarget(U),M.updateRenderTargetMipmap(U)),v.isScene===!0&&v.onAfterRender(S,v,L),at.resetDefaultState(),w=-1,y=null,b.pop(),b.length>0?(f=b[b.length-1],te===!0&&Z.setGlobalState(S.clippingPlanes,f.state.camera)):f=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function cs(v,L,F,O){if(v.visible===!1)return;if(v.layers.test(L.layers)){if(v.isGroup)F=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(L);else if(v.isLight)f.pushLight(v),v.castShadow&&f.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||X.intersectsSprite(v)){O&&Be.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Te);const ce=Y.update(v),ge=v.material;ge.visible&&m.push(v,ce,ge,F,Be.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||X.intersectsObject(v))){const ce=Y.update(v),ge=v.material;if(O&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Be.copy(v.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Be.copy(ce.boundingSphere.center)),Be.applyMatrix4(v.matrixWorld).applyMatrix4(Te)),Array.isArray(ge)){const _e=ce.groups;for(let Ce=0,ze=_e.length;Ce<ze;Ce++){const xe=_e[Ce],$e=ge[xe.materialIndex];$e&&$e.visible&&m.push(v,ce,$e,F,Be.z,xe)}}else ge.visible&&m.push(v,ce,ge,F,Be.z,null)}}const J=v.children;for(let ce=0,ge=J.length;ce<ge;ce++)cs(J[ce],L,F,O)}function na(v,L,F,O){const I=v.opaque,J=v.transmissive,ce=v.transparent;f.setupLightsView(F),te===!0&&Z.setGlobalState(S.clippingPlanes,F),O&&be.viewport(A.copy(O)),I.length>0&&lr(I,L,F),J.length>0&&lr(J,L,F),ce.length>0&&lr(ce,L,F),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function ia(v,L,F,O){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[O.id]===void 0&&(f.state.transmissionRenderTarget[O.id]=new Nn(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?rr:vn,minFilter:Jn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));const J=f.state.transmissionRenderTarget[O.id],ce=O.viewport||A;J.setSize(ce.z,ce.w);const ge=S.getRenderTarget();S.setRenderTarget(J),S.getClearColor(H),q=S.getClearAlpha(),q<1&&S.setClearColor(16777215,.5),S.clear(),qe&&Ee.render(F);const _e=S.toneMapping;S.toneMapping=Un;const Ce=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),f.setupLightsView(O),te===!0&&Z.setGlobalState(S.clippingPlanes,O),lr(v,F,O),M.updateMultisampleRenderTarget(J),M.updateRenderTargetMipmap(J),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let xe=0,$e=L.length;xe<$e;xe++){const lt=L[xe],ht=lt.object,Nt=lt.geometry,Je=lt.material,Se=lt.group;if(Je.side===on&&ht.layers.test(O.layers)){const hn=Je.side;Je.side=Ft,Je.needsUpdate=!0,ra(ht,F,O,Nt,Je,Se),Je.side=hn,Je.needsUpdate=!0,ze=!0}}ze===!0&&(M.updateMultisampleRenderTarget(J),M.updateRenderTargetMipmap(J))}S.setRenderTarget(ge),S.setClearColor(H,q),Ce!==void 0&&(O.viewport=Ce),S.toneMapping=_e}function lr(v,L,F){const O=L.isScene===!0?L.overrideMaterial:null;for(let I=0,J=v.length;I<J;I++){const ce=v[I],ge=ce.object,_e=ce.geometry,Ce=O===null?ce.material:O,ze=ce.group;ge.layers.test(F.layers)&&ra(ge,L,F,_e,Ce,ze)}}function ra(v,L,F,O,I,J){v.onBeforeRender(S,L,F,O,I,J),v.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),I.onBeforeRender(S,L,F,O,v,J),I.transparent===!0&&I.side===on&&I.forceSinglePass===!1?(I.side=Ft,I.needsUpdate=!0,S.renderBufferDirect(F,L,O,I,v,J),I.side=zn,I.needsUpdate=!0,S.renderBufferDirect(F,L,O,I,v,J),I.side=on):S.renderBufferDirect(F,L,O,I,v,J),v.onAfterRender(S,L,F,O,I,J)}function cr(v,L,F){L.isScene!==!0&&(L=ft);const O=Me.get(v),I=f.state.lights,J=f.state.shadowsArray,ce=I.state.version,ge=ve.getParameters(v,I.state,J,L,F),_e=ve.getProgramCacheKey(ge);let Ce=O.programs;O.environment=v.isMeshStandardMaterial?L.environment:null,O.fog=L.fog,O.envMap=(v.isMeshStandardMaterial?k:_).get(v.envMap||O.environment),O.envMapRotation=O.environment!==null&&v.envMap===null?L.environmentRotation:v.envMapRotation,Ce===void 0&&(v.addEventListener("dispose",Ue),Ce=new Map,O.programs=Ce);let ze=Ce.get(_e);if(ze!==void 0){if(O.currentProgram===ze&&O.lightsStateVersion===ce)return oa(v,ge),ze}else ge.uniforms=ve.getUniforms(v),v.onBeforeCompile(ge,S),ze=ve.acquireProgram(ge,_e),Ce.set(_e,ze),O.uniforms=ge.uniforms;const xe=O.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(xe.clippingPlanes=Z.uniform),oa(v,ge),O.needsLights=nh(v),O.lightsStateVersion=ce,O.needsLights&&(xe.ambientLightColor.value=I.state.ambient,xe.lightProbe.value=I.state.probe,xe.directionalLights.value=I.state.directional,xe.directionalLightShadows.value=I.state.directionalShadow,xe.spotLights.value=I.state.spot,xe.spotLightShadows.value=I.state.spotShadow,xe.rectAreaLights.value=I.state.rectArea,xe.ltc_1.value=I.state.rectAreaLTC1,xe.ltc_2.value=I.state.rectAreaLTC2,xe.pointLights.value=I.state.point,xe.pointLightShadows.value=I.state.pointShadow,xe.hemisphereLights.value=I.state.hemi,xe.directionalShadowMap.value=I.state.directionalShadowMap,xe.directionalShadowMatrix.value=I.state.directionalShadowMatrix,xe.spotShadowMap.value=I.state.spotShadowMap,xe.spotLightMatrix.value=I.state.spotLightMatrix,xe.spotLightMap.value=I.state.spotLightMap,xe.pointShadowMap.value=I.state.pointShadowMap,xe.pointShadowMatrix.value=I.state.pointShadowMatrix),O.currentProgram=ze,O.uniformsList=null,ze}function sa(v){if(v.uniformsList===null){const L=v.currentProgram.getUniforms();v.uniformsList=qr.seqWithValue(L.seq,v.uniforms)}return v.uniformsList}function oa(v,L){const F=Me.get(v);F.outputColorSpace=L.outputColorSpace,F.batching=L.batching,F.batchingColor=L.batchingColor,F.instancing=L.instancing,F.instancingColor=L.instancingColor,F.instancingMorph=L.instancingMorph,F.skinning=L.skinning,F.morphTargets=L.morphTargets,F.morphNormals=L.morphNormals,F.morphColors=L.morphColors,F.morphTargetsCount=L.morphTargetsCount,F.numClippingPlanes=L.numClippingPlanes,F.numIntersection=L.numClipIntersection,F.vertexAlphas=L.vertexAlphas,F.vertexTangents=L.vertexTangents,F.toneMapping=L.toneMapping}function eh(v,L,F,O,I){L.isScene!==!0&&(L=ft),M.resetTextureUnits();const J=L.fog,ce=O.isMeshStandardMaterial?L.environment:null,ge=U===null?S.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Ui,_e=(O.isMeshStandardMaterial?k:_).get(O.envMap||ce),Ce=O.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,ze=!!F.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),xe=!!F.morphAttributes.position,$e=!!F.morphAttributes.normal,lt=!!F.morphAttributes.color;let ht=Un;O.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ht=S.toneMapping);const Nt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Je=Nt!==void 0?Nt.length:0,Se=Me.get(O),hn=f.state.lights;if(te===!0&&(ye===!0||v!==y)){const Yt=v===y&&O.id===w;Z.setState(O,v,Yt)}let Qe=!1;O.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==hn.state.version||Se.outputColorSpace!==ge||I.isBatchedMesh&&Se.batching===!1||!I.isBatchedMesh&&Se.batching===!0||I.isBatchedMesh&&Se.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Se.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Se.instancing===!1||!I.isInstancedMesh&&Se.instancing===!0||I.isSkinnedMesh&&Se.skinning===!1||!I.isSkinnedMesh&&Se.skinning===!0||I.isInstancedMesh&&Se.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Se.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Se.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Se.instancingMorph===!1&&I.morphTexture!==null||Se.envMap!==_e||O.fog===!0&&Se.fog!==J||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==Z.numPlanes||Se.numIntersection!==Z.numIntersection)||Se.vertexAlphas!==Ce||Se.vertexTangents!==ze||Se.morphTargets!==xe||Se.morphNormals!==$e||Se.morphColors!==lt||Se.toneMapping!==ht||Se.morphTargetsCount!==Je)&&(Qe=!0):(Qe=!0,Se.__version=O.version);let jt=Se.currentProgram;Qe===!0&&(jt=cr(O,L,I));let ti=!1,Ht=!1,Oi=!1;const dt=jt.getUniforms(),tn=Se.uniforms;if(be.useProgram(jt.program)&&(ti=!0,Ht=!0,Oi=!0),O.id!==w&&(w=O.id,Ht=!0),ti||y!==v){be.buffers.depth.getReversed()?(oe.copy(v.projectionMatrix),dd(oe),ud(oe),dt.setValue(D,"projectionMatrix",oe)):dt.setValue(D,"projectionMatrix",v.projectionMatrix),dt.setValue(D,"viewMatrix",v.matrixWorldInverse);const Mn=dt.map.cameraPosition;Mn!==void 0&&Mn.setValue(D,Ie.setFromMatrixPosition(v.matrixWorld)),We.logarithmicDepthBuffer&&dt.setValue(D,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&dt.setValue(D,"isOrthographic",v.isOrthographicCamera===!0),y!==v&&(y=v,Ht=!0,Oi=!0)}if(I.isSkinnedMesh){dt.setOptional(D,I,"bindMatrix"),dt.setOptional(D,I,"bindMatrixInverse");const Yt=I.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),dt.setValue(D,"boneTexture",Yt.boneTexture,M))}I.isBatchedMesh&&(dt.setOptional(D,I,"batchingTexture"),dt.setValue(D,"batchingTexture",I._matricesTexture,M),dt.setOptional(D,I,"batchingIdTexture"),dt.setValue(D,"batchingIdTexture",I._indirectTexture,M),dt.setOptional(D,I,"batchingColorTexture"),I._colorsTexture!==null&&dt.setValue(D,"batchingColorTexture",I._colorsTexture,M));const Hi=F.morphAttributes;if((Hi.position!==void 0||Hi.normal!==void 0||Hi.color!==void 0)&&Re.update(I,F,jt),(Ht||Se.receiveShadow!==I.receiveShadow)&&(Se.receiveShadow=I.receiveShadow,dt.setValue(D,"receiveShadow",I.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(tn.envMap.value=_e,tn.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&L.environment!==null&&(tn.envMapIntensity.value=L.environmentIntensity),Ht&&(dt.setValue(D,"toneMappingExposure",S.toneMappingExposure),Se.needsLights&&th(tn,Oi),J&&O.fog===!0&&ae.refreshFogUniforms(tn,J),ae.refreshMaterialUniforms(tn,O,V,ee,f.state.transmissionRenderTarget[v.id]),qr.upload(D,sa(Se),tn,M)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(qr.upload(D,sa(Se),tn,M),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&dt.setValue(D,"center",I.center),dt.setValue(D,"modelViewMatrix",I.modelViewMatrix),dt.setValue(D,"normalMatrix",I.normalMatrix),dt.setValue(D,"modelMatrix",I.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Yt=O.uniformsGroups;for(let Mn=0,bn=Yt.length;Mn<bn;Mn++){const aa=Yt[Mn];P.update(aa,jt),P.bind(aa,jt)}}return jt}function th(v,L){v.ambientLightColor.needsUpdate=L,v.lightProbe.needsUpdate=L,v.directionalLights.needsUpdate=L,v.directionalLightShadows.needsUpdate=L,v.pointLights.needsUpdate=L,v.pointLightShadows.needsUpdate=L,v.spotLights.needsUpdate=L,v.spotLightShadows.needsUpdate=L,v.rectAreaLights.needsUpdate=L,v.hemisphereLights.needsUpdate=L}function nh(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(v,L,F){Me.get(v.texture).__webglTexture=L,Me.get(v.depthTexture).__webglTexture=F;const O=Me.get(v);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=F===void 0,O.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,L){const F=Me.get(v);F.__webglFramebuffer=L,F.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(v,L=0,F=0){U=v,T=L,R=F;let O=!0,I=null,J=!1,ce=!1;if(v){const _e=Me.get(v);if(_e.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(D.FRAMEBUFFER,null),O=!1;else if(_e.__webglFramebuffer===void 0)M.setupRenderTarget(v);else if(_e.__hasExternalTextures)M.rebindTextures(v,Me.get(v.texture).__webglTexture,Me.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const xe=v.depthTexture;if(_e.__boundDepthTexture!==xe){if(xe!==null&&Me.has(xe)&&(v.width!==xe.image.width||v.height!==xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(v)}}const Ce=v.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(ce=!0);const ze=Me.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(ze[L])?I=ze[L][F]:I=ze[L],J=!0):v.samples>0&&M.useMultisampledRTT(v)===!1?I=Me.get(v).__webglMultisampledFramebuffer:Array.isArray(ze)?I=ze[F]:I=ze,A.copy(v.viewport),B.copy(v.scissor),N=v.scissorTest}else A.copy(we).multiplyScalar(V).floor(),B.copy(He).multiplyScalar(V).floor(),N=ot;if(be.bindFramebuffer(D.FRAMEBUFFER,I)&&O&&be.drawBuffers(v,I),be.viewport(A),be.scissor(B),be.setScissorTest(N),J){const _e=Me.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+L,_e.__webglTexture,F)}else if(ce){const _e=Me.get(v.texture),Ce=L||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,_e.__webglTexture,F||0,Ce)}w=-1},this.readRenderTargetPixels=function(v,L,F,O,I,J,ce){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Me.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ce!==void 0&&(ge=ge[ce]),ge){be.bindFramebuffer(D.FRAMEBUFFER,ge);try{const _e=v.texture,Ce=_e.format,ze=_e.type;if(!We.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=v.width-O&&F>=0&&F<=v.height-I&&D.readPixels(L,F,O,I,Fe.convert(Ce),Fe.convert(ze),J)}finally{const _e=U!==null?Me.get(U).__webglFramebuffer:null;be.bindFramebuffer(D.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=async function(v,L,F,O,I,J,ce){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Me.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ce!==void 0&&(ge=ge[ce]),ge){const _e=v.texture,Ce=_e.format,ze=_e.type;if(!We.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=v.width-O&&F>=0&&F<=v.height-I){be.bindFramebuffer(D.FRAMEBUFFER,ge);const xe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,xe),D.bufferData(D.PIXEL_PACK_BUFFER,J.byteLength,D.STREAM_READ),D.readPixels(L,F,O,I,Fe.convert(Ce),Fe.convert(ze),0);const $e=U!==null?Me.get(U).__webglFramebuffer:null;be.bindFramebuffer(D.FRAMEBUFFER,$e);const lt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await hd(D,lt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,xe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,J),D.deleteBuffer(xe),D.deleteSync(lt),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,L=null,F=0){v.isTexture!==!0&&(Ji("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,v=arguments[1]);const O=Math.pow(2,-F),I=Math.floor(v.image.width*O),J=Math.floor(v.image.height*O),ce=L!==null?L.x:0,ge=L!==null?L.y:0;M.setTexture2D(v,0),D.copyTexSubImage2D(D.TEXTURE_2D,F,0,0,ce,ge,I,J),be.unbindTexture()},this.copyTextureToTexture=function(v,L,F=null,O=null,I=0){v.isTexture!==!0&&(Ji("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,v=arguments[1],L=arguments[2],I=arguments[3]||0,F=null);let J,ce,ge,_e,Ce,ze,xe,$e,lt;const ht=v.isCompressedTexture?v.mipmaps[I]:v.image;F!==null?(J=F.max.x-F.min.x,ce=F.max.y-F.min.y,ge=F.isBox3?F.max.z-F.min.z:1,_e=F.min.x,Ce=F.min.y,ze=F.isBox3?F.min.z:0):(J=ht.width,ce=ht.height,ge=ht.depth||1,_e=0,Ce=0,ze=0),O!==null?(xe=O.x,$e=O.y,lt=O.z):(xe=0,$e=0,lt=0);const Nt=Fe.convert(L.format),Je=Fe.convert(L.type);let Se;L.isData3DTexture?(M.setTexture3D(L,0),Se=D.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(M.setTexture2DArray(L,0),Se=D.TEXTURE_2D_ARRAY):(M.setTexture2D(L,0),Se=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,L.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,L.unpackAlignment);const hn=D.getParameter(D.UNPACK_ROW_LENGTH),Qe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),jt=D.getParameter(D.UNPACK_SKIP_PIXELS),ti=D.getParameter(D.UNPACK_SKIP_ROWS),Ht=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ht.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ht.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,_e),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ce),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ze);const Oi=v.isDataArrayTexture||v.isData3DTexture,dt=L.isDataArrayTexture||L.isData3DTexture;if(v.isRenderTargetTexture||v.isDepthTexture){const tn=Me.get(v),Hi=Me.get(L),Yt=Me.get(tn.__renderTarget),Mn=Me.get(Hi.__renderTarget);be.bindFramebuffer(D.READ_FRAMEBUFFER,Yt.__webglFramebuffer),be.bindFramebuffer(D.DRAW_FRAMEBUFFER,Mn.__webglFramebuffer);for(let bn=0;bn<ge;bn++)Oi&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Me.get(v).__webglTexture,I,ze+bn),v.isDepthTexture?(dt&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Me.get(L).__webglTexture,I,lt+bn),D.blitFramebuffer(_e,Ce,J,ce,xe,$e,J,ce,D.DEPTH_BUFFER_BIT,D.NEAREST)):dt?D.copyTexSubImage3D(Se,I,xe,$e,lt+bn,_e,Ce,J,ce):D.copyTexSubImage2D(Se,I,xe,$e,lt+bn,_e,Ce,J,ce);be.bindFramebuffer(D.READ_FRAMEBUFFER,null),be.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else dt?v.isDataTexture||v.isData3DTexture?D.texSubImage3D(Se,I,xe,$e,lt,J,ce,ge,Nt,Je,ht.data):L.isCompressedArrayTexture?D.compressedTexSubImage3D(Se,I,xe,$e,lt,J,ce,ge,Nt,ht.data):D.texSubImage3D(Se,I,xe,$e,lt,J,ce,ge,Nt,Je,ht):v.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,I,xe,$e,J,ce,Nt,Je,ht.data):v.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,I,xe,$e,ht.width,ht.height,Nt,ht.data):D.texSubImage2D(D.TEXTURE_2D,I,xe,$e,J,ce,Nt,Je,ht);D.pixelStorei(D.UNPACK_ROW_LENGTH,hn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Qe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,jt),D.pixelStorei(D.UNPACK_SKIP_ROWS,ti),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ht),I===0&&L.generateMipmaps&&D.generateMipmap(Se),be.unbindTexture()},this.copyTextureToTexture3D=function(v,L,F=null,O=null,I=0){return v.isTexture!==!0&&(Ji("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,O=arguments[1]||null,v=arguments[2],L=arguments[3],I=arguments[4]||0),Ji('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,L,F,O,I)},this.initRenderTarget=function(v){Me.get(v).__webglFramebuffer===void 0&&M.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?M.setTextureCube(v,0):v.isData3DTexture?M.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?M.setTexture2DArray(v,0):M.setTexture2D(v,0),be.unbindTexture()},this.resetState=function(){T=0,R=0,U=null,be.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}class _c{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ae(e),this.near=t,this.far=n}clone(){return new _c(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class wm extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zt,this.environmentIntensity=1,this.environmentRotation=new zt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Mm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Lo,this.updateRanges=[],this.version=0,this.uuid=xn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const It=new C;class Qr{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Qt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Qt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Qt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Qt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Qt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),r=tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),r=tt(r,this.array),s=tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Qr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class bm extends wn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let gi;const Yi=new C,_i=new C,xi=new C,yi=new De,Xi=new De,xc=new Ze,Lr=new C,qi=new C,Ir=new C,ol=new De,Fs=new De,al=new De;class Fg extends xt{constructor(e=new bm){if(super(),this.isSprite=!0,this.type="Sprite",gi===void 0){gi=new Ot;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Mm(t,5);gi.setIndex([0,1,2,0,2,3]),gi.setAttribute("position",new Qr(n,3,0,!1)),gi.setAttribute("uv",new Qr(n,2,3,!1))}this.geometry=gi,this.material=e,this.center=new De(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_i.setFromMatrixScale(this.matrixWorld),xc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),xi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_i.multiplyScalar(-xi.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;Dr(Lr.set(-.5,-.5,0),xi,a,_i,r,s),Dr(qi.set(.5,-.5,0),xi,a,_i,r,s),Dr(Ir.set(.5,.5,0),xi,a,_i,r,s),ol.set(0,0),Fs.set(1,0),al.set(1,1);let o=e.ray.intersectTriangle(Lr,qi,Ir,!1,Yi);if(o===null&&(Dr(qi.set(-.5,.5,0),xi,a,_i,r,s),Fs.set(0,1),o=e.ray.intersectTriangle(Lr,Ir,qi,!1,Yi),o===null))return;const l=e.ray.origin.distanceTo(Yi);l<e.near||l>e.far||t.push({distance:l,point:Yi.clone(),uv:qt.getInterpolation(Yi,Lr,qi,Ir,ol,Fs,al,new De),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Dr(i,e,t,n,r,s){yi.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Xi.x=s*yi.x-r*yi.y,Xi.y=r*yi.x+s*yi.y):Xi.copy(yi),i.copy(e),i.x+=Xi.x,i.y+=Xi.y,i.applyMatrix4(xc)}class Em extends Ct{constructor(e=null,t=1,n=1,r,s,a,o,l,c=wt,h=wt,d,u){super(null,a,o,l,c,h,r,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ll extends Pt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const vi=new Ze,cl=new Ze,Ur=[],hl=new Fn,Tm=new Ze,Ki=new Ge,ji=new ki;class Og extends Ge{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ll(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Tm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Fn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vi),hl.copy(e.boundingBox).applyMatrix4(vi),this.boundingBox.union(hl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ki),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vi),ji.copy(e.boundingSphere).applyMatrix4(vi),this.boundingSphere.union(ji)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Ki.geometry=this.geometry,Ki.material=this.material,Ki.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ji.copy(this.boundingSphere),ji.applyMatrix4(n),e.ray.intersectsSphere(ji)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,vi),cl.multiplyMatrices(n,vi),Ki.matrixWorld=cl,Ki.raycast(e,Ur);for(let a=0,o=Ur.length;a<o;a++){const l=Ur[a];l.instanceId=s,l.object=this,t.push(l)}Ur.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ll(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Em(new Float32Array(r*this.count),r,this.count,Go,ln));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Am extends wn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const dl=new Ze,Do=new nc,zr=new ki,Nr=new C;class Hg extends xt{constructor(e=new Ot,t=new Am){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere),zr.applyMatrix4(r),zr.radius+=s,e.ray.intersectsSphere(zr)===!1)return;dl.copy(r).invert(),Do.copy(e.ray).applyMatrix4(dl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=u,x=p;g<x;g++){const m=c.getX(g);Nr.fromBufferAttribute(d,m),ul(Nr,m,l,r,e,t,this)}}else{const u=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let g=u,x=p;g<x;g++)Nr.fromBufferAttribute(d,g),ul(Nr,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ul(i,e,t,n,r,s,a){const o=Do.distanceSqToPoint(i);if(o<t){const l=new C;Do.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class or extends Ct{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class jo extends Ot{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],d=[],u=[],p=[];let g=0;const x=[],m=n/2;let f=0;E(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Lt(d,3)),this.setAttribute("normal",new Lt(u,3)),this.setAttribute("uv",new Lt(p,2));function E(){const S=new C,z=new C;let T=0;const R=(t-e)/n;for(let U=0;U<=s;U++){const w=[],y=U/s,A=y*(t-e)+e;for(let B=0;B<=r;B++){const N=B/r,H=N*l+o,q=Math.sin(H),W=Math.cos(H);z.x=A*q,z.y=-y*n+m,z.z=A*W,d.push(z.x,z.y,z.z),S.set(q,R,W).normalize(),u.push(S.x,S.y,S.z),p.push(N,1-y),w.push(g++)}x.push(w)}for(let U=0;U<r;U++)for(let w=0;w<s;w++){const y=x[w][U],A=x[w+1][U],B=x[w+1][U+1],N=x[w][U+1];(e>0||w!==0)&&(h.push(y,A,N),T+=3),(t>0||w!==s-1)&&(h.push(A,B,N),T+=3)}c.addGroup(f,T,0),f+=T}function b(S){const z=g,T=new De,R=new C;let U=0;const w=S===!0?e:t,y=S===!0?1:-1;for(let B=1;B<=r;B++)d.push(0,m*y,0),u.push(0,y,0),p.push(.5,.5),g++;const A=g;for(let B=0;B<=r;B++){const H=B/r*l+o,q=Math.cos(H),W=Math.sin(H);R.x=w*W,R.y=m*y,R.z=w*q,d.push(R.x,R.y,R.z),u.push(0,y,0),T.x=q*.5+.5,T.y=W*.5*y+.5,p.push(T.x,T.y),g++}for(let B=0;B<r;B++){const N=z+B,H=A+B;S===!0?h.push(H,H+1,N):h.push(H+1,H,N),U+=3}c.addGroup(f,U,S===!0?1:2),f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yc extends jo{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new yc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vc extends Ot{constructor(e=.5,t=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],l=[],c=[],h=[];let d=e;const u=(t-e)/r,p=new C,g=new De;for(let x=0;x<=r;x++){for(let m=0;m<=n;m++){const f=s+m/n*a;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}d+=u}for(let x=0;x<r;x++){const m=x*(n+1);for(let f=0;f<n;f++){const E=f+m,b=E,S=E+n+1,z=E+n+2,T=E+1;o.push(b,S,T),o.push(S,z,T)}}this.setIndex(o),this.setAttribute("position",new Lt(l,3)),this.setAttribute("normal",new Lt(c,3)),this.setAttribute("uv",new Lt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Sc extends Ot{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new C,u=new C,p=[],g=[],x=[],m=[];for(let f=0;f<=n;f++){const E=[],b=f/n;let S=0;f===0&&a===0?S=.5/t:f===n&&l===Math.PI&&(S=-.5/t);for(let z=0;z<=t;z++){const T=z/t;d.x=-e*Math.cos(r+T*s)*Math.sin(a+b*o),d.y=e*Math.cos(a+b*o),d.z=e*Math.sin(r+T*s)*Math.sin(a+b*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(T+S,1-b),E.push(c++)}h.push(E)}for(let f=0;f<n;f++)for(let E=0;E<t;E++){const b=h[f][E+1],S=h[f][E],z=h[f+1][E],T=h[f+1][E+1];(f!==0||a>0)&&p.push(b,S,T),(f!==n-1||l<Math.PI)&&p.push(S,z,T)}this.setIndex(p),this.setAttribute("position",new Lt(g,3)),this.setAttribute("normal",new Lt(x,3)),this.setAttribute("uv",new Lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class kr extends wn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ss,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Rm extends wn{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new Ae(16777215),this.specular=new Ae(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ss,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zt,this.combine=is,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ei extends wn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ss,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zt,this.combine=is,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $o extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Cm extends $o{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ae(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Os=new Ze,fl=new C,pl=new C;class wc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qo,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;fl.setFromMatrixPosition(e.matrixWorld),t.position.copy(fl),pl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pl),t.updateMatrixWorld(),Os.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Os),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Os)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ml=new Ze,$i=new C,Hs=new C;class Pm extends wc{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new De(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),$i.setFromMatrixPosition(e.matrixWorld),n.position.copy($i),Hs.copy(n.position),Hs.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Hs),n.updateMatrixWorld(),r.makeTranslation(-$i.x,-$i.y,-$i.z),ml.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ml)}}class Bg extends $o{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Pm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Lm extends wc{constructor(){super(new dc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Im extends $o{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new Lm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Gg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=gl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=gl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function gl(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fo);function Mc(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},a={},o=i[0].morphTargetsRelative,l=new Ot;let c=0;for(let h=0;h<i.length;++h){const d=i[h];let u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(d.attributes[p]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(d.morphAttributes[p])}if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0;const d=[];for(let u=0;u<i.length;++u){const p=i[u].index;for(let g=0;g<p.count;++g)d.push(p.getX(g)+h);h+=i[u].attributes.position.count}l.setIndex(d)}for(const h in s){const d=_l(s[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in a){const d=a[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){const p=[];for(let x=0;x<a[h].length;++x)p.push(a[h][x][u]);const g=_l(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function _l(i){let e,t,n,r=-1,s=0;for(let c=0;c<i.length;++c){const h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}const a=new e(s),o=new Pt(a,t,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const d=l/t;for(let u=0,p=h.count;u<p;u++)for(let g=0;g<t;g++){const x=h.getComponent(u,g);o.setComponent(u+d,g,x)}}else a.set(h.array,l);l+=h.count*t}return r!==void 0&&(o.gpuType=r),o}const bc=1,xl=new Map;function Ec(i){const e=xl.get(i);if(e)return e;const t=16,n=document.createElement("canvas");n.width=n.height=t;const r=n.getContext("2d");let s=i.length*7919+i.charCodeAt(0)*31;const a=()=>(s=s*16807%2147483647,s/2147483647);for(let l=0;l<t;l++)for(let c=0;c<t;c++){let h=1;const d=a();switch(i){case"plain":h=.95+d*.05;break;case"noise":h=.84+d*.16;break;case"sand":h=d<.12?.82:d>.94?1:.92+d*.05;break;case"stone":{const p=Math.sin(c*.9+Math.sin(l*.7)*2)*Math.cos(l*.8);h=.78+d*.12+p*.08;break}case"scales":h=(c+Math.floor(l/4)%2*2)%4===0||l%4===3?.86:.96+d*.04;break;case"planks":h=l%4===0?.7:.88+d*.1;break;case"leaves":h=d<.25?.62:.85+d*.15;break;case"glass":h=c===0||l===0||c===t-1||l===t-1?.75:c===l||c===l+1?1:.92;break}const u=Math.round(Math.min(1,Math.max(0,h))*255);r.fillStyle=`rgb(${u},${u},${u})`,r.fillRect(c,l,1,1)}const o=new or(n);return o.colorSpace=Rt,o.magFilter=wt,o.minFilter=Gl,o.wrapS=o.wrapT=$r,o.userData.shared=!0,xl.set(i,o),o}function de(i,e="noise",t={}){return new ei({color:i,map:Ec(e),...t})}function ar(i,e,t,n=bc){const r=new Mt(i,e,t),s=r.getAttribute("uv"),a=[[t,e],[t,e],[i,t],[i,t],[i,e],[i,e]];for(let o=0;o<6;o++){const[l,c]=a[o];for(let h=0;h<4;h++){const d=o*4+h;s.setXY(d,s.getX(d)*l/n,s.getY(d)*c/n)}}return r}const yl=new Ze,Dm=new Ni,Um=new zt,zm=new C,Nm=new C(1,1,1);class Vg{constructor(e=Math.random,t=.12){this.rng=e,this.shade=t,this.parts=new Map}box(e,t,n,r,s,a,o,l=0,c=0,h=0,d=bc){const u=ar(s,a,o,d);yl.compose(zm.set(t,n,r),Dm.setFromEuler(Um.set(c,l,h)),Nm.set(1,1,1)),this.addGeometry(e,u,yl)}cube(e,t,n,r,s){this.box(e,t,n,r,s,s,s,0,0,0,Math.max(s,.25))}addGeometry(e,t,n){const r=t.index?t.toNonIndexed():t.clone();t.dispose(),r.applyMatrix4(n);const s=r.getAttribute("position").count,a=new Float32Array(s*3),o=1-this.rng()*this.shade;a.fill(o),r.setAttribute("color",new Pt(a,3));let l=this.parts.get(e);l||this.parts.set(e,l=[]),l.push(r)}build(){const e=new Map;for(const[t,n]of this.parts){const r=Mc(n,!1);n.forEach(s=>s.dispose()),r&&e.set(t,r)}return this.parts.clear(),e}meshes(e){return[...this.build()].map(([t,n])=>{const r=new Ge(n,e(t));return r.name=t,r})}}function wi(i,e=.25){const t=[],n=new Ae,r=new zt,s=new Ze;for(const o of i){const l=ar(o.w,o.h,o.d,e).toNonIndexed();(o.rx||o.ry||o.rz)&&l.applyMatrix4(s.makeRotationFromEuler(r.set(o.rx??0,o.ry??0,o.rz??0))),l.translate(o.x,o.y,o.z),n.set(o.color);const c=l.getAttribute("position").count,h=new Float32Array(c*3);for(let d=0;d<c;d++)h.set([n.r,n.g,n.b],d*3);l.setAttribute("color",new Pt(h,3)),t.push(l)}const a=Mc(t,!1);return t.forEach(o=>o.dispose()),a}function At(i,e){const t=i.length,n=i[0].length,r=document.createElement("canvas");r.width=n,r.height=t;const s=r.getContext("2d");i.forEach((o,l)=>{for(let c=0;c<n;c++){const h=e[o[c]];h&&(s.fillStyle=h,s.fillRect(c,l,1,1))}});const a=new or(r);return a.colorSpace=Rt,a.magFilter=wt,a.minFilter=wt,a.generateMipmaps=!1,a}const Zo={daisy:{top:"own",tail:"own",hairStyle:"bun",hairColor:"brown",accessory:"daisy"},coral:{top:"own",tail:"own",hairStyle:"ponytail",hairColor:"pink",accessory:"star"},leo:{top:"own",tail:"own",hairStyle:"spiky",hairColor:"black",accessory:"goggles"}},km={shell:{top:12166911,accent:16777215,badge:[".PPP.","PWPWP","PWPWP",".PPP.","..P.."],badgePalette:{P:"#ff8ac8",W:"#ffe0f0"}},sailor:{top:16777215,accent:2047887,badge:["..R..",".RRR.","..R..","R.R.R",".RRR."],badgePalette:{R:"#e53030"}},sparkle:{top:9064447,accent:16765501,badge:["..Y..","..Y..","YYWYY","..Y..","..Y.."],badgePalette:{Y:"#ffd23d",W:"#ffffff"}},heart:{top:8118467,accent:16777215,badge:[".R.R.","RRRRR","RRRRR",".RRR.","..R.."],badgePalette:{R:"#ff3b6b"}},kebaya:{top:16775419,accent:16744366,badge:[".P.PY","PYP.Y",".P.G.","G.GPY",".G.P."],badgePalette:{P:"#ff5f9e",Y:"#ffc21a",G:"#3faa6a"}},hanbok:{top:16769899,accent:16777215,badge:["RR.RR","RRRRR","..R..",".R.R.",".R..R"],badgePalette:{R:"#e5304a"},sleeves:["#ffe36b","#e5304a","#ffd23d","#2fae5a","#3f7fff","#ff6fb0","#ffffff","#e5304a"]},saree:{top:14032762,accent:16761370,badge:["GOO..","GOOO.",".GOOO","..GOO","...GO"],badgePalette:{G:"#ffc21a",O:"#ff7a1a"}}},Fm={ocean:{tail:2064383,tip:4186320,fin:12121343},purple:{tail:8011775,tip:13215487,fin:15391999},emerald:{tail:2075226,tip:9105576,fin:14221283},sunset:{tail:16738842,tip:16736168,fin:16766648},silver:{tail:10135739,tip:15660026,fin:16777215},gold:{tail:13208074,tip:16770688,fin:16774856},chima:{tail:15020106,tip:16736122,fin:16765501}},vl=[16731998,16751146,16765501,5233015,4172031,10117119],Sl=[2760559,3811994,5910448,3811994,2760559,6963152],wl=[2047871,9064226,2047871,9064226,2047871,9064226],Ml=[13111342,14692458,13111342,14692458,13111342,16761370],Om={brown:{hair:"#5a361f",dark:"#3f2414"},pink:{hair:"#ff4f9e",dark:"#d63384"},blonde:{hair:"#f2c44a",dark:"#c9971f"},black:{hair:"#2a2a33",dark:"#14141a"},blue:{hair:"#3f8fff",dark:"#1f5fd0"},purple:{hair:"#9a5fff",dark:"#6a2fd6"},mint:{hair:"#5fe0b8",dark:"#2fae88"},silver:{hair:"#d8dee8",dark:"#a6b0c0"}},Tc=["daisy","coral","leo"],es="#ffe0c8",Hm="#ff9fb2",Bm="#d2475f",Gm={daisy:{hair:"#5a361f",hairDark:"#3f2414",top:16767053,topAccent:16777215,tail:16761370,tailTip:16771466,fin:16774072,eye:"#4a2a12",shoe:16765501,badge:["..W..",".WYW.","WYYYW",".WYW.","..W.."],badgePalette:{W:"#ffffff",Y:"#ff9f1a"}},coral:{hair:"#ff4f9e",hairDark:"#d63384",top:16747720,topAccent:16769126,tail:16734885,tailTip:16752589,fin:16765414,eye:"#8a1f55",shoe:16732062,badge:["..Y..",".YYY.","YYYYY",".Y.Y.","Y...Y"],badgePalette:{Y:"#ffe066"}},leo:{hair:"#2a2a33",hairDark:"#14141a",top:3121112,topAccent:2047887,tail:2064319,tailTip:6283472,fin:13170431,eye:"#1f3550",shoe:2047887,badge:["...W.","..WW.",".WWW.","WWWW.","NNNNN"],badgePalette:{W:"#ffffff",N:"#1f3f8f"}}};function Uo(i){return i.hairStyle==="short"||i.hairStyle==="spiky"}function Ac(i,e){const t={...Gm[i]},n=Om[e.hairColor];if(t.hair=n.hair,t.hairDark=n.dark,e.top!=="own"){const r=km[e.top];t.top=r.top,t.topAccent=r.accent,t.badge=r.badge,t.badgePalette=r.badgePalette,t.sleeves=r.sleeves}if(e.tail==="rainbow")t.tailColors=vl,t.tail=vl[0],t.fin=16777215;else if(e.tail==="galaxy")t.tailColors=Sl,t.tail=Sl[0],t.fin=13215487,t.tailDots=16777215;else if(e.tail==="batik")t.tailColors=wl,t.tail=wl[0],t.fin=15913866,t.tailDots=16765501;else if(e.tail==="lehenga")t.tailColors=Ml,t.tail=Ml[0],t.fin=16765501,t.tailDots=16770688;else if(e.tail!=="own"){const r=Fm[e.tail];t.tail=r.tail,t.tailTip=r.tip,t.fin=r.fin}return t}const Rc=["HHHHHHHHHHHH","HHDHHHHHHDHH","HHSSHHHHSSHH","HSSSSHHSSSSH","HSSSSSSSSSSH","HSWESSSSWESH","HSEESSSSEESH","HPSSSSSSSSPH","HSSSSMMSSSSH","HSSSSSSSSSSH","HSSSSSSSSSSH","HHSSSSSSSSHH"],Cc=["HHHHHHHHHHHH","HHHDHHHHDHHH","HHSHHHHSSHHH","HSSSSSSSSSSH","SSSSSSSSSSSS","SSWESSSSWESS","SSEESSSSEESS","SPSSSSSSSSPS","SSSMSSSSMSSS","SSSSMMMMSSSS","SSSSSSSSSSSS","SSSSSSSSSSSS"];function Vm(i){return Uo(i)?Cc:Rc}function Pc(i){return{H:i.hair,D:i.hairDark,S:es,E:i.eye,W:"#ffffff",P:Hm,M:Bm}}function Wm(i,e){const t=Pc(i);if(e){const h=["HHHHHHHHHHHH","HHHHHHHDHHHH","HHHHHHHHHHHH","SHHHHHHHHHHH","SSHHHHHHHDHH","SSSSSSHHHHHH","SSSSSPPSHHHH","SSSSSPPSHHHH","SSSSSSSSSHHH","SSSSSSSSSSHH","SSSSSSSSSSSH","SSSSSSSSSSSS"];return{front:At(Cc,t),right:At(h,t),left:At(h.map(d=>d.split("").reverse().join("")),t),top:At(["HHHHHHHHHHHH","HHHHHDHHHHHH","HHHHHDHHHHHH","HHHHHDHHHHHH"],t),back:At(["HHHHHHHHHHHH","HHHDHHHHHDHH","HHHHHHHHHHHH","HHHHHHDHHHHH","HDHHHHHHHHHH","HHHHHHHHHHHH","SSSSSSSSSSSS","SSSSSSSSSSSS"],t),chin:At(["SSSS"],t)}}const n=At(Rc,t),r=["HHHHHHHHHHHH","HHHHHHHDHHHH","HHHHHHHHHHHH","SHHHHHHHHHHH","SSHHHHHHHHHH","SSSHHHHHHDHH","SSSSHHHHHHHH","SSSSSHHHHHHH","SSSSSHHHHHHH","SSSSSHHHHHHH","SSSSSHHHDHHH","SSSSSHHHHHHH"],s=At(r,t),a=At(r.map(h=>h.split("").reverse().join("")),t),o=At(["HHHHHHHHHHHH","HHHHHDHHHHHH","HHHHHDHHHHHH","HHHHHDHHHHHH"],t),l=At(["HHHHHHHHHHHH","HHHDHHHHHDHH","HHHHHHHHHHHH","HHHHHHDHHHHH","HDHHHHHHHHHH","HHHHHHHHHDHH"],t),c=At(["SSSS"],t);return{front:n,right:s,left:a,top:o,back:l,chin:c}}function Ym(i){const e="#"+new Ae(i.top).getHexString(),t="#"+new Ae(i.topAccent).getHexString(),n=[];for(let r=0;r<9;r++){let s="";for(let a=0;a<9;a++){const o=r-3,l=a-2,c=o>=0&&o<5&&l>=0&&l<5?i.badge[o][l]:".";s+=r===0?"A":c!=="."?c:"T"}n.push(s)}return At(n,{T:e,A:t,...i.badgePalette})}function bl(i,e=!0){const t=[...i.map((r,s)=>String.fromCharCode(65+s).repeat(4)),...e?["SSSS","SSSS"]:[]],n={S:es};return i.forEach((r,s)=>n[String.fromCharCode(65+s)]=r),At(t,n)}const El=.5,Tl=.2,Al=new Set(["cap","pirate","sharkHat","jellyHat"]),nn=i=>new ei({map:i}),Q=(i,e,t,n)=>new Ge(ar(i,e,t,.5),n),Fr=(i,e,t,n)=>new Ge(new Mt(i,e,t),n);class Xm{constructor(e,t=Zo[e]){this.id=e,this.style=t,this.root=new Pe,this.pivot=new Pe,this.head=new Pe,this.tail=[],this.tailGroup=new Pe,this.legs=new Pe,this.legPivots=[],this.form="mermaid",this.ponytail=[],this.knees=[],this.feet=[],this.elbows=[],this.airBlend=0,this.wasAir=!1,this.landT=0,this.phase=0,this.pitch=.12,this.spin=0,this.flickT=0,this.bag=new Pe,this.bagBits=[],this.bagFill=0,this.bagPop=0;const n=Ac(e,t);this.root.add(this.pivot),this.buildBody(n),this.buildHead(n),this.buildHair(n,t),this.buildTail(n),this.buildLegs(n),this.buildBag(),this.setForm("mermaid"),this.root.scale.setScalar(.85)}setForm(e){this.form=e,this.tailGroup.visible=e==="mermaid",this.legs.visible=e==="human"}buildBody(e){const t=de(e.top,"plain"),n=nn(Ym(e)),r=Fr(.95,.9,.55,[t,t,t,t,n,t]);r.position.y=.55,this.pivot.add(r),this.torso=r;const s=de(es,"plain"),a=Q(.4,.12,.35,s);a.position.y=1.03,this.pivot.add(a);const o=e.sleeves?nn(bl(e.sleeves)):s,l=e.sleeves?nn(bl(e.sleeves,!1)):s;this.armL=this.makeArm(t,o,l,1),this.armR=this.makeArm(t,o,l,-1)}makeArm(e,t,n,r){const s=new Pe;s.position.set(.63*r,.92,0);const a=Q(.32,.36,.34,e);a.position.y=-.12,s.add(a);const o=(d,u)=>d instanceof ei&&d.map?Fr(.26,u,.28,Array(6).fill(d)):Q(.26,u,.28,d),l=o(n,.22);l.position.y=-.4,s.add(l);const c=new Pe;c.position.y=-.5;const h=o(t,.32);return h.position.y=-.14,c.add(h),s.add(c),this.elbows.push(c),this.pivot.add(s),s}buildHead(e){const t=this.head;t.position.y=1.7,this.pivot.add(t);const n=Wm(e,Uo(this.style)),r=Fr(1.2,1.2,1.2,[nn(n.right),nn(n.left),nn(n.top),nn(n.chin),nn(n.front),nn(n.back)]);t.add(r)}hairBase(e,t){const n=de(e.hair,"noise"),r=Q(1.32,.2,1.32,n);r.position.set(0,.66,-.02),this.head.add(r);const s=Q(1.32,t?2.2:1.3,.18,n);s.position.set(0,t?-.5:-.05,-.66),this.head.add(s);for(const a of[-1,1]){const o=Q(.2,1.25,.7,n);o.position.set(.68*a,-.15,-.25),this.head.add(o);const l=Q(.2,.55,.3,n);l.position.set(.68*a,.3,.42),this.head.add(l)}return n}shortHair(e){const t=de(e.hair,"noise"),n=Q(1.3,.18,1.3,t);n.position.set(0,.68,-.02),this.head.add(n);const r=Q(1.3,.85,.16,t);r.position.set(0,.2,-.66),this.head.add(r);for(const a of[-1,1]){const o=Q(.14,.42,1,t);o.position.set(.66*a,.42,-.12),this.head.add(o)}const s=Q(.7,.18,.16,t);return s.position.set(-.18,.5,.64),this.head.add(s),t}buildHair(e,t){if(Uo(t)){const r=this.shortHair(e);if(t.hairStyle==="spiky"&&!Al.has(t.accessory))for(const[s,a,o,l]of[[-.4,.3,.34,.3],[0,.35,.42,0],[.4,.3,.34,-.3],[-.3,-.2,.38,.2],[.25,-.25,.4,-.2],[0,-.55,.3,0]]){const c=Q(.3,o,.3,r);c.position.set(s,.77+o/2,a),c.rotation.z=l,c.rotation.x=a<0?-.25:.15,this.head.add(c)}this.buildAccessory(t);return}const n=this.hairBase(e,t.hairStyle==="long");if(t.hairStyle==="bun"&&!Al.has(t.accessory)){const r=Q(.6,.5,.6,n);r.position.set(0,.95,-.2),this.head.add(r);const s=de(16765501,"plain");for(const a of[-1,1]){const o=Q(.28,.24,.1,s);o.position.set(.3*a,.82,.12),this.head.add(o)}}else if(t.hairStyle==="ponytail")this.hairChain(n,new C(0,.7,-.6),6,.46);else if(t.hairStyle==="twin")for(const r of[-1,1])this.hairChain(n,new C(.72*r,.45,-.3),4,.36);this.buildAccessory(t)}hairChain(e,t,n,r){const s=de(14541804,"plain");let a=this.head;for(let o=0;o<n;o++){const l=new Pe;o===0?l.position.copy(t):l.position.set(0,-.3,-.06);const c=r-o*.04;l.add(Q(c,.32,c,e)),o%2===1&&l.add(Q(c+.06,.08,c+.06,s)),a.add(l),this.ponytail.push(l),a=l}}buildAccessory(e){const t=e.accessory;if(t==="none")return;const n=new Pe;if(t==="daisy"){const r=de(16777215,"plain");for(const[s,a]of[[0,1],[0,-1],[1,0],[-1,0]]){const o=Q(.12,.12,.06,r);o.position.set(s*.12,a*.12,0),n.add(o)}n.add(Q(.12,.12,.08,de(16757530,"plain"))),n.position.set(.45,.48,.64)}else if(t==="orchid"){const r=de(15043288,"plain"),s=de(10498191,"plain");for(const[l,c,h]of[[0,.15,0],[-.15,.04,.5],[.15,.04,-.5],[-.1,-.13,-.4],[.1,-.13,.4]]){const d=Q(.16,.16,.06,r);d.position.set(l,c,0),d.rotation.z=h,n.add(d)}const a=Q(.1,.12,.09,s);a.position.y=-.02,n.add(a);const o=Q(.04,.04,.1,de(16765501,"plain"));o.position.y=.03,n.add(o),n.position.set(.45,.46,.64)}else if(t==="daenggi"){const r=de(14032703,"plain"),s=de(16765501,"plain");n.add(Q(.26,.24,.26,r));for(const a of[-1,1]){const o=Q(.3,.26,.16,r);o.position.set(0,.02,.24*a),o.rotation.x=.4*a,n.add(o);const l=Q(.2,.9,.07,r);l.position.set(0,-.52,.09*a),l.rotation.x=.1*a,n.add(l);const c=Q(.1,.1,.1,s);c.position.set(.02,-.7,.09*a),n.add(c)}n.position.set(.7,-.3,-.3)}else if(t==="tikka"){const r=de(16761370,"plain"),s=Q(.06,.04,.7,r);s.position.set(0,.62,.3),n.add(s);const a=Q(.06,.2,.04,r);a.position.set(0,.52,.64),n.add(a),n.add(Q(.22,.22,.05,r));const o=Q(.13,.13,.06,de(14032703,"plain"));o.position.z=.02,n.add(o);const l=Q(.08,.08,.06,de(16774888,"plain"));l.position.set(0,-.15,.01),n.add(l),n.children.slice(2).forEach(c=>c.position.add(new C(0,.34,.64)))}else if(t==="star"){const r=de(16765501,"plain");n.add(Q(.3,.1,.06,r),Q(.1,.3,.06,r)),n.rotation.z=.3,n.position.set(.45,.48,.64)}else if(t==="bow"){const r=de(16726891,"plain");for(const s of[-1,1]){const a=Q(.34,.3,.14,r);a.position.set(.22*s,0,0),a.rotation.z=.25*s,n.add(a)}n.add(Q(.14,.16,.18,de(14032719,"plain"))),n.position.set(0,.86,.25)}else if(t==="shell"){const r=de(16747208,"plain"),s=de(16765414,"plain");for(let o=-2;o<=2;o++){const l=Q(.08,.3-Math.abs(o)*.05,.06,o%2?s:r);l.position.set(o*.075,.04-Math.abs(o)*.02,0),l.rotation.z=-o*.25,n.add(l)}const a=Q(.14,.08,.07,r);a.position.y=-.14,n.add(a),n.position.set(.42,.45,.64)}else if(t==="sunglasses"){const r=de(1710634,"plain"),s=de(16777215,"plain");for(const a of[-1,1]){const o=Q(.42,.26,.06,r);o.position.set(.27*a,0,0),n.add(o);const l=Q(.08,.06,.02,s);l.position.set(.27*a-.1,.06,.04),n.add(l);const c=Q(.06,.06,.6,r);c.position.set(.62*a,.04,-.3),n.add(c)}n.add(Q(.14,.06,.06,r)),n.position.set(0,0,.64)}else if(t==="cap"){const r=de(15020080,"plain"),s=Q(1.36,.3,1.36,r);n.add(s);const a=Q(1,.08,.5,r);a.position.set(0,-.12,.88),n.add(a);const o=Q(.16,.08,.16,de(16777215,"plain"));o.position.y=.19,n.add(o),n.position.set(0,.72,0)}else if(t==="catEars"){const r=de(16777215,"plain"),s=de(16752589,"plain");n.add(Q(1.34,.1,.16,de(16736168,"plain")));for(const a of[-1,1]){const o=Q(.34,.28,.14,r);o.position.set(.4*a,.16,0),n.add(o);const l=Q(.18,.16,.14,r);l.position.set(.4*a,.36,0),n.add(l);const c=Q(.16,.16,.04,s);c.position.set(.4*a,.18,.08),n.add(c)}n.position.set(0,.8,.1)}else if(t==="flowers"){const r=[16736168,16765501,16777215,10117119,16747069,6279423],s=de(4172362,"plain");for(let a=0;a<12;a++){const o=a/12*Math.PI*2,l=a%2===0,c=Q(l?.2:.14,l?.2:.1,l?.2:.14,l?de(r[a/2%r.length],"plain"):s);if(c.position.set(Math.sin(o)*.62,0,Math.cos(o)*.62),n.add(c),l){const h=Q(.08,.08,.08,de(16757530,"plain"));h.position.set(Math.sin(o)*.72,.02,Math.cos(o)*.72),n.add(h)}}n.position.set(0,.8,0)}else if(t==="pirate"){const r=de(2236974,"plain"),s=de(16777215,"plain"),a=Q(1.7,.12,1.2,r);n.add(a);const o=Q(1.1,.42,.9,r);o.position.y=.26,n.add(o);for(const c of[-1,1]){const h=Q(.3,.3,1.1,r);h.position.set(.78*c,.12,0),n.add(h)}const l=Q(.22,.2,.04,s);l.position.set(0,.28,.47),n.add(l);for(const c of[-1,1]){const h=Q(.36,.05,.03,s);h.position.set(0,.14,.47),h.rotation.z=.5*c,n.add(h)}n.position.set(0,.82,0)}else if(t==="tiara"){const r=de(16315135,"plain"),s=de(14212840,"plain");n.add(Q(1.2,.08,.1,s));for(let o=-3;o<=3;o++){const l=Q(.12,.12,.12,r);l.position.set(o*.16,.1+(3-Math.abs(o))*.05,0),n.add(l)}const a=Q(.2,.24,.1,de(16726927,"plain"));a.position.set(0,.36,.02),n.add(a),n.position.set(0,.76,.45)}else if(t==="halo"){const r=new Sn({color:16773274});for(const[s,a,o,l]of[[0,.42,.96,.12],[0,-.42,.96,.12],[.42,0,.12,.72],[-.42,0,.12,.72]]){const c=Q(o,.1,l,r);c.position.set(s,0,a),n.add(c)}n.position.set(0,1.2,0)}else if(t==="unicorn"){const r=de(16765501,"plain"),s=de(16777215,"plain");[.26,.21,.16,.11,.07].forEach((a,o)=>{const l=Q(a,.16,a,o%2?s:r);l.position.y=o*.15,l.rotation.y=o*.4,n.add(l)}),n.rotation.x=.35,n.position.set(0,.86,.32)}else if(t==="sharkHat"){const r=de(8360872,"plain"),s=de(16777215,"plain"),a=Q(1.42,.42,1.42,r);n.add(a),[.4,.3,.2].forEach((o,l)=>{const c=Q(.14,o,.42-l*.12,r);c.position.set(0,.3+l*.12,-.1-l*.08),n.add(c)});for(let o=-3;o<=3;o++){const l=Q(.12,.12,.04,s);l.position.set(o*.18,-.24,.72),l.rotation.z=Math.PI/4,n.add(l)}for(const o of[-1,1]){const l=Q(.04,.12,.12,de(1315866,"plain"));l.position.set(.72*o,.04,.4),n.add(l)}n.position.set(0,.78,0)}else if(t==="jellyHat"){const r=de(16747216,"plain",{transparent:!0,opacity:.8}),s=de(16765422,"plain",{transparent:!0,opacity:.85});n.add(Q(1.46,.36,1.46,r));const a=Q(1.1,.26,1.1,r);a.position.y=.3,n.add(a);for(let o=0;o<8;o++){const l=o/8*Math.PI*2+.4;if(Math.cos(l)>.6)continue;const c=Q(.08,.5+o%3*.15,.08,s);c.position.set(Math.sin(l)*.68,-.4-o%3*.07,Math.cos(l)*.68),n.add(c)}n.position.set(0,.74,0)}else if(t==="goggles"){const r=de(2047887,"plain"),s=de(16765501,"plain"),a=de(9431295,"glass",{transparent:!0,opacity:.85}),o=Q(1.34,.14,1.34,r);n.add(o);for(const l of[-1,1]){const c=Q(.42,.32,.1,s);c.position.set(.25*l,0,.68),n.add(c);const h=Q(.3,.2,.06,a);h.position.set(.25*l,0,.74),n.add(h)}n.position.set(0,.4,0)}else if(t==="crown"){const r=de(16761370,"plain"),s=de(16736168,"plain");n.add(Q(.8,.14,.8,r));for(const[o,l]of[[-.33,.33],[.33,.33],[-.33,-.33],[.33,-.33],[0,.33]]){const c=Q(.14,.2,.14,r);c.position.set(o,.17,l),n.add(c)}const a=Q(.12,.12,.06,s);a.position.set(0,.02,.42),n.add(a),n.position.set(0,.84,0)}this.head.add(n)}buildTail(e){const t=new Ae(e.tail),n=new Ae(e.tailTip),r=Q(1,.16,.62,de(e.topAccent,"plain"));r.position.y=.08,this.pivot.add(this.tailGroup),this.tailGroup.add(r);let s=this.tailGroup;const a=6;for(let l=0;l<a;l++){const c=new Pe;c.position.y=l===0?.02:-.36;const h=.9-l*.11,d=.55-l*.05,u=e.tailColors?new Ae(e.tailColors[l%e.tailColors.length]):t.clone().lerp(n,l/(a-1)),p=de(u,"scales"),g=Q(h,.38,d,p);if(g.position.y=-.18,c.add(g),e.tailDots!==void 0){const x=new Sn({color:e.tailDots});for(const[m,f,E]of[[l*37%7/7-.4,-.1,1],[l*53%5/5-.3,-.26,-1]]){const b=Q(.07,.07,.02,x);b.position.set(m*h,f,(d/2+.01)*E),c.add(b)}}s.add(c),this.tail.push(c),s=c}const o=de(e.fin,"noise",{transparent:!0,opacity:.92});for(const l of[-1,1]){const c=Q(.62,.26,.1,o);c.position.set(.3*l,-.48,0),c.rotation.z=-.55*l,s.add(c);const h=Q(.3,.2,.1,o);h.position.set(.58*l,-.7,0),h.rotation.z=-.9*l,s.add(h)}}buildLegs(e){this.pivot.add(this.legs);const t=Q(.95,.32,.56,de(e.tail,"plain"));t.position.y=-.02,this.legs.add(t);const n=de(es,"plain"),r=de(e.shoe,"plain");for(const s of[-1,1]){const a=new Pe;a.position.set(.22*s,-.15,0);const o=Q(.36,.42,.38,n);o.position.y=-.23,a.add(o);const l=new Pe;l.position.y=-.44;const c=Q(.36,.42,.38,n);c.position.y=-.19,l.add(c);const h=Q(.4,.22,.5,r);h.position.set(0,-.49,.05),l.add(h),a.add(l),this.knees.push(l),this.feet.push(h),this.legs.add(a),this.legPivots.push(a)}}celebrate(){this.spin=1.4}part(e){return e==="head"?this.head:e==="tail"?this.tailGroup:this.torso}flick(){this.flickT=El}setBag(e){if(this.bag.visible=e!==null,e===null)return;e>this.bagFill&&(this.bagPop=.3),this.bagFill=e;const t=Math.ceil(e*this.bagBits.length);this.bagBits.forEach((n,r)=>n.visible=r<t)}buildBag(){const e=nn(At(["NBBBNBBB","BNBNBNBN","BBNBBBNB","BNBNBNBN","NBBBNBBB","BNBNBNBN","BBNBBBNB","BNBNBNBN"],{N:"#1f5fd0",B:"#5fb8ff"})),t=Fr(.72,.72,.42,[e,e,e,e,e,e]);this.bag.add(t);const n=Q(.5,.1,.3,de(2056144,"plain"));n.position.y=.4,this.bag.add(n),[7328767,15020080,16777215,3123818,16765501].forEach((a,o)=>{const l=Q(.16,.2+o%2*.08,.16,de(a,"plain"));l.position.set(-.24+o*.12,.42+o%2*.04,o%2?-.06:.06),l.rotation.z=(o-2)*.18,l.visible=!1,this.bag.add(l),this.bagBits.push(l)});const s=de(2056144,"plain");for(const a of[-1,1]){const o=Q(.12,.1,.6,s);o.position.set(.28*a,.38,.5),this.bag.add(o)}this.bag.position.set(0,.6,-.5),this.bag.visible=!1,this.pivot.add(this.bag)}holdInRightHand(e){e.position.set(0,-.32,.12),this.elbows[1].add(e)}walk(e,t,n=0,r=0){this.head.rotation.y=0,this.legPivots.forEach(H=>H.rotation.z=0);const s=n>.02||r>0;this.wasAir&&!s&&(this.landT=Tl),this.wasAir=s,this.landT=Math.max(0,this.landT-e),this.airBlend+=((s?1:0)-this.airBlend)*Math.min(1,e*14);const a=Math.min(1,t),o=Math.min(1,Math.max(0,(t-1)/.3)),l=t>.05;s||(this.phase+=e*(l?7+a*3+o*5:1.6));const c=Math.sin(this.phase),h=Math.cos(this.phase),d=a*.55+o*.4,u=a*.45+o*1.05,p=[-c*d,c*d],g=[Math.max(0,h)*u+o*.15,Math.max(0,-h)*u+o*.15],x=a*.6+o*.55,m=[-c*x,c*x],f=-(a*.25+o*1.15),E=a*.05+o*.2,b=l?Math.abs(h)*.07*a*(1-o)+Math.abs(c)*.16*o:Math.sin(this.phase*.8)*.015,S=Math.min(1,Math.max(0,r/6)),z=[-.9*S-.35*(1-S),.35*S-.15*(1-S)],T=[1.5*S+.5*(1-S),.5*S+.35*(1-S)],R=-2.5*S-.4*(1-S),U=.3*S+1.1*(1-S),w=this.airBlend,y=(H,q)=>H+(q-H)*w,A=this.landT>0?Math.sin(this.landT/Tl*Math.PI):0;this.legPivots.forEach((H,q)=>H.rotation.x=y(p[q],z[q])-A*.5),this.knees.forEach((H,q)=>H.rotation.x=y(g[q],T[q])+A*.9),this.armL.rotation.set(y(m[0],R),0,y(.12,U)),this.armR.rotation.set(y(m[1]-.15,R),0,-y(.12,U)),this.elbows.forEach(H=>H.rotation.x=y(f,-.3)-A*.4),this.pitch=0,this.pivot.rotation.x=y(E,.08)+A*.25,this.head.rotation.x=-this.pivot.rotation.x*.6,this.pivot.position.y=(1-w)*b-A*.14;const B=s&&r<0?Math.min(1,-r/8):0;this.ponytail.forEach((H,q)=>H.rotation.x=a*.2+o*.25+B*.5+Math.sin(this.phase-q*.6)*.1*a),this.bagPop=Math.max(0,this.bagPop-e);const N=.7+this.bagFill*.5+Math.sin(this.bagPop/.3*Math.PI)*.15;this.bag.scale.set(N,N,N),this.bag.position.z=-.28-.21*N,this.spin>0?(this.spin=Math.max(0,this.spin-e),this.pivot.rotation.y=(1-this.spin/1.4)*Math.PI*4):this.pivot.rotation.y=c*.08*(a+o)*(1-w)}ride(e,t,n){const r=Math.min(1,n);this.airBlend=0,this.wasAir=!1,this.landT=0,this.phase+=e*(t==="bike"?3+r*9:t==="drive"?2:2.5+r*4.5);const s=Math.sin(this.phase),[a,o]=this.legPivots,[l,c]=this.knees;this.head.rotation.y=0,this.legPivots.forEach(p=>p.rotation.z=0);let h=.08,d=0;if(t==="kick"){const p=r>.1?Math.max(0,s)*r:0;a.rotation.x=.15+p*.75+(r>.1?.15:0),l.rotation.x=.25+p*.45,o.rotation.x=-.05,c.rotation.x=.15+p*.3,this.armL.rotation.set(-.85,0,-.06),this.armR.rotation.set(-.85,0,.06),this.elbows.forEach(g=>g.rotation.x=-.45),h=.1+p*.12,d=-p*.08}else if(t==="board"){this.pivot.rotation.y=-1.25,this.head.rotation.y=1.05,a.rotation.set(-.2,0,-.32),o.rotation.set(-.2,0,.32),this.knees.forEach(g=>g.rotation.x=.45);const p=Math.sin(this.phase*.8)*(.15+r*.15);this.armL.rotation.set(-.2,0,1+p),this.armR.rotation.set(-.2,0,-1+p),this.elbows.forEach(g=>g.rotation.x=-.25),h=.15,d=-.12+Math.sin(this.phase*1.6)*.02}else t==="bike"?(this.legPivots.forEach((p,g)=>{const x=this.phase+g*Math.PI;p.rotation.x=-1.2+Math.sin(x)*.32,this.knees[g].rotation.x=1.25+Math.cos(x)*.38}),this.armL.rotation.set(-1.05,0,-.05),this.armR.rotation.set(-1.05,0,.05),this.elbows.forEach(p=>p.rotation.x=-.35),h=.3+r*.08,d=-.05):(this.legPivots.forEach(p=>p.rotation.x=0),this.knees.forEach(p=>p.rotation.x=.1),this.armL.rotation.set(-.95,0,-.1),this.armR.rotation.set(-.95,0,.1),this.elbows.forEach(p=>p.rotation.x=-.6),h=.05,d=Math.sin(this.phase*3)*.015*r);t!=="board"&&(this.pivot.rotation.y=0),this.pitch=0,this.pivot.rotation.x=h,this.head.rotation.x=-h*.6,this.pivot.position.y=d,this.ponytail.forEach((p,g)=>p.rotation.x=.25+r*.4+Math.sin(this.phase*2-g*.6)*.06),this.bagPop=Math.max(0,this.bagPop-e);const u=.7+this.bagFill*.5;this.bag.scale.set(u,u,u),this.bag.position.z=-.28-.21*u}update(e,t){const n=this.flickT>0?Math.sin(this.flickT/El*Math.PI):0;this.flickT=Math.max(0,this.flickT-e),this.phase+=e*(2.2+t*7+n*14);const r=.12+t*1.2;this.pitch+=(r-this.pitch)*(1-Math.exp(-e*4)),this.pivot.rotation.x=this.pitch,this.head.rotation.x=-this.pitch*.55;const s=.1+t*.22+n*.35;this.tail.forEach((c,h)=>{c.rotation.x=Math.sin(this.phase-h*.75)*s*(.5+h*.22)});const a=.5-t*.4,o=Math.sin(this.phase*.5)*.18*(1-t);this.armL.rotation.z=a+o,this.armR.rotation.z=-a-o,this.armL.rotation.x=this.armR.rotation.x=-t*.4,this.legPivots.forEach((c,h)=>{c.rotation.x=Math.sin(this.phase*1.3+h*Math.PI)*(.15+t*.35+n*.4)}),this.bagPop=Math.max(0,this.bagPop-e);const l=.7+this.bagFill*.5+Math.sin(this.bagPop/.3*Math.PI)*.15;if(this.bag.scale.set(l,l,l),this.bag.position.z=-.28-.21*l,this.ponytail.forEach((c,h)=>{c.rotation.x=t*.3+Math.sin(this.phase*.6-h*.6)*.12}),this.spin>0){this.spin=Math.max(0,this.spin-e);const c=1-this.spin/1.4;this.pivot.rotation.y=c*Math.PI*4}else this.pivot.rotation.y=0}}const zo="daisy-coral.save.v1",Rl={coins:0,character:"daisy",friend:"coral",lang:"en",muted:!1,storySeen:!1,bestStars:0,pets:[],rescued:{},cents:0,styles:Zo,wardrobe:[],ingredients:{},found:[],safety:[],ocean:"singapore",unlocked:["singapore"],savedAt:0},No="daisy-coral.account";function Lc(){try{const i=localStorage.getItem(No);return i?JSON.parse(i):null}catch{return null}}function qm(i){try{i?localStorage.setItem(No,JSON.stringify(i)):localStorage.removeItem(No)}catch{}}function Wg(){const i=Lc();try{i&&localStorage.removeItem(`${zo}.${i.uid}`)}catch{}qm(null)}function Ic(){const i=Lc();return i?`${zo}.${i.uid}`:zo}function Yg(){try{const i=localStorage.getItem(Ic());if(i)return Cl({...Rl,...JSON.parse(i)})}catch{}return Cl({...Rl})}function Cl(i){const e=i.friend&&i.friend!==i.character?i.friend:Km(i.character);return{...i,friend:e,pets:[...i.pets],rescued:{...i.rescued},styles:Object.fromEntries(Tc.map(t=>[t,{...Zo[t],...i.styles[t]}])),wardrobe:[...i.wardrobe],ingredients:{...i.ingredients},found:[...i.found],safety:[...i.safety],unlocked:[...i.unlocked]}}function Km(i){return i==="daisy"?"coral":"daisy"}let Kr=null;function Xg(i){Kr=i}function qg(i){i.savedAt=Date.now(),jm(i),Kr==null||Kr(i)}function jm(i){try{localStorage.setItem(Ic(),JSON.stringify(i))}catch{}}const Pl=new Map;function Dc(i,{rows:e,palette:t}){const n=Pl.get(i);if(n)return n;const r=8,s=document.createElement("canvas");s.width=e[0].length*r,s.height=e.length*r;const a=s.getContext("2d");e.forEach((l,c)=>{for(let h=0;h<l.length;h++){const d=t[l[h]];d&&(a.fillStyle=d,a.fillRect(h*r,c*r,r,r))}});const o=s.toDataURL();return Pl.set(i,o),o}function $m(i,e){return Dc(`face-${i}-${e.hairStyle}-${e.hairColor}`,{rows:Vm(e),palette:Pc(Ac(i,e))})}function Zm(i,e,t){const n=document.createElement("img");return n.src=$m(i,e),n.alt="",n.className=`${t} pixel-icon`,n}function it(i,e="",t,n){const r=document.createElement(i);return e&&(r.className=e),t?(r.dataset.i18n=t,r.textContent=Ol(t)):n!==void 0&&(r.textContent=n),r}class Kg{constructor(){this.ctx=null,this.master=null,this.ambient=null,this._muted=!1}get muted(){return this._muted}set muted(e){this._muted=e,this.master&&this.ctx&&this.master.gain.setTargetAtTime(e?0:.8,this.ctx.currentTime,.05)}unlock(){if(!this.ctx){const e=window.AudioContext??window.webkitAudioContext;if(!e)return;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=this._muted?0:.8,this.master.connect(this.ctx.destination)}this.ctx.state==="suspended"&&this.ctx.resume(),this.startAmbient()}startAmbient(){if(!this.ctx||!this.master||this.ambient)return;const e=this.ctx,t=e.sampleRate*3,n=e.createBuffer(1,t,e.sampleRate),r=n.getChannelData(0);let s=0;for(let d=0;d<t;d++)s=(s+.02*(Math.random()*2-1))/1.02,r[d]=s*3;const a=e.createBufferSource();a.buffer=n,a.loop=!0;const o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=380;const l=e.createGain();l.gain.value=.35;const c=e.createOscillator();c.frequency.value=.08;const h=e.createGain();h.gain.value=120,c.connect(h).connect(o.frequency),a.connect(o).connect(l).connect(this.master),a.start(),c.start(),this.ambient=a}tone(e,t,n,r,s,a){if(!this.ctx||!this.master)return;const o=this.ctx,l=o.currentTime+t,c=o.createOscillator();c.type=r,c.frequency.setValueAtTime(e,l),a&&c.frequency.exponentialRampToValueAtTime(a,l+n);const h=o.createGain();h.gain.setValueAtTime(1e-4,l),h.gain.exponentialRampToValueAtTime(s,l+.015),h.gain.exponentialRampToValueAtTime(1e-4,l+n),c.connect(h).connect(this.master),c.start(l),c.stop(l+n+.05)}play(e){if(!(!this.ctx||this._muted))switch(e){case"collect":this.tone(420,0,.16,"sine",.35,980),this.tone(1320,.1,.12,"triangle",.15);break;case"coin":this.tone(1568,0,.1,"triangle",.18),this.tone(2093,.07,.16,"triangle",.18);break;case"net":[523,659,784].forEach((t,n)=>this.tone(t,n*.09,.22,"triangle",.25));break;case"complete":[523,659,784,1047,784,1047,1319].forEach((t,n)=>this.tone(t,n*.13,.35,"triangle",.25));break;case"click":this.tone(660,0,.08,"sine",.2,880);break;case"whoosh":this.tone(900,0,.28,"sawtooth",.06,160),this.tone(300,.02,.2,"sine",.25,90),this.tone(1400,.12,.08,"sine",.12,2200);break;case"bagFull":[988,784,988,784].forEach((t,n)=>this.tone(t,n*.2,.22,"triangle",.28));break;case"danger":[196,208,196,208].forEach((t,n)=>this.tone(t,n*.28,.24,"square",.12));break;case"ouch":this.tone(520,0,.3,"sine",.3,140),this.tone(260,.12,.25,"triangle",.15,520);break;case"otter":[1800,2200,1900].forEach((t,n)=>this.tone(t,n*.09,.07,"sine",.09,t*1.2));break;case"porpoise":[0,.05,.1,.15].forEach(t=>this.tone(3200,t,.02,"square",.05)),this.tone(1400,.24,.25,"sine",.09,2400);break;case"dugong":this.tone(1100,0,.12,"sine",.08,1600),this.tone(1300,.16,.12,"sine",.08,1900),[0,.04,.08,.12,.16].forEach(t=>this.tone(900,.34+t,.035,"triangle",.05,1100));break}}}const Jm=new zt,Qm=new Ze;function ts(i,e=.25){const t=i.map(r=>{const s=wi([{x:0,y:0,z:0,w:r.w,h:r.h,d:r.d,color:r.color}],e);return(r.rx||r.ry||r.rz)&&s.applyMatrix4(Qm.makeRotationFromEuler(Jm.set(r.rx??0,r.ry??0,r.rz??0))),s.translate(r.x,r.y,r.z),s}),n=new Ot;for(const[r,s]of[["position",3],["normal",3],["uv",2],["color",3]]){const a=t.reduce((c,h)=>c+h.getAttribute(r).array.length,0),o=new Float32Array(a);let l=0;for(const c of t){const h=c.getAttribute(r).array;o.set(h,l),l+=h.length}n.setAttribute(r,new Pt(o,s))}return t.forEach(r=>r.dispose()),n}let eg,tg,ng,ig,rg,Bs;const Jo=()=>eg??(eg=de(16777215,"plain",{vertexColors:!0})),ls=()=>tg??(tg=new Rm({color:16777215,vertexColors:!0,map:Ec("plain"),shininess:80,specular:6710886})),sg=()=>ng??(ng=de(16777215,"planks",{vertexColors:!0})),Uc=()=>ig??(ig=de(13627647,"plain",{transparent:!0,opacity:.32,depthWrite:!1,side:on})),og=()=>rg??(rg=de(4172031,"plain",{transparent:!0,opacity:.5,depthWrite:!1})),ke=(i,e=Jo(),t=.25)=>new Ge(ts(i,t),e),ut=(...i)=>{const e=new Pe;return i.length&&e.add(...i),e},ne=16777215,pt=1381660;let ag;const lg=()=>ag??(ag=de(16777215,"noise",{vertexColors:!0}));function Mi(i,e,t,n,r,s,a,o=[]){const l=i[0].length,c=i.length;return i.forEach((h,d)=>{for(let u=0;u<h.length;){let p=u;for(;p<h.length&&h[p]===h[u];)p++;const g=e[h[u]];g!==void 0&&o.push({x:t+((u+p)/2-l/2)*s,y:n+(c/2-d-.5)*s,z:r,w:(p-u)*s,h:s,d:a,color:g}),u=p}}),o}const cg=i=>i.map(e=>e.split("").reverse().join("")),hg=16769224;function zc(i){const t={n95:[15133680,16317180],n95Pink:[16744372,16753609],n95Purple:[10976232,12688882],n95Mint:[7330996,10218702],n95Yellow:[16765501,16769402],n95Black:[3159100,4606805]}[i],n=(t==null?void 0:t[0])??{maskPink:16748480,maskBlue:10147583,maskStar:16765501,maskRainbow:16734810,maskFlower:13234909,maskCat:16645629}[i],r=i==="n95"?14015458:i==="n95Black"?3159100:ne,s=[{x:0,y:-.27,z:.63,w:.9,h:.45,d:.06,color:n}];for(const a of[-1,1])s.push({x:a*.535,y:-.2,z:.615,w:.17,h:.06,d:.03,color:r}),s.push({x:a*.615,y:-.2,z:.35,w:.03,h:.06,d:.55,color:r}),s.push({x:a*.615,y:-.06,z:.12,w:.03,h:.25,d:.08,color:r});if(t)s.push({x:0,y:-.28,z:.69,w:.66,h:.32,d:.07,color:t[1]}),s.push({x:0,y:-.06,z:.665,w:.36,h:.03,d:.03,color:11186876}),s.push({x:.17,y:-.32,z:.745,w:.15,h:.15,d:.06,color:9081758}),s.push({x:.17,y:-.32,z:.78,w:.07,h:.07,d:.02,color:6252402});else if(i==="maskPink")for(const[a,o]of[[-.3,-.12],[.05,-.16],[.32,-.1],[-.15,-.3],[.2,-.32],[-.33,-.42],[.02,-.43],[.34,-.41]])s.push({x:a,y:o,z:.665,w:.08,h:.08,d:.02,color:ne});else if(i==="maskRainbow")[16751165,16769357,6280042,5089023,10121200].forEach((a,o)=>s.push({x:0,y:-.135-o*.075,z:.665,w:.9,h:.075,d:.02,color:a}));else if(i==="maskFlower")for(const[a,o,l]of[[-.27,-.16,16748480],[.22,-.2,16777215],[-.05,-.36,16769357],[.3,-.4,16748480],[-.33,-.41,16777215]]){for(const[c,h]of[[-.06,0],[.06,0],[0,-.06],[0,.06]])s.push({x:a+c,y:o+h,z:.665,w:.06,h:.06,d:.02,color:l});s.push({x:a,y:o,z:.67,w:.06,h:.06,d:.02,color:16751165})}else if(i==="maskCat"){s.push({x:0,y:-.17,z:.67,w:.12,h:.08,d:.03,color:16748480}),s.push({x:0,y:-.25,z:.665,w:.03,h:.08,d:.02,color:4868690}),s.push({x:-.06,y:-.3,z:.665,w:.1,h:.03,d:.02,color:4868690}),s.push({x:.06,y:-.3,z:.665,w:.1,h:.03,d:.02,color:4868690});for(const o of[-1,1])for(const l of[-.2,-.27])s.push({x:o*.3,y:l,z:.665,w:.24,h:.025,d:.02,color:4868690})}else if(i==="maskBlue")for(const a of[-.15,-.27,-.39])s.push({x:0,y:a,z:.67,w:.9,h:.045,d:.03,color:6271212});else s.push({x:0,y:-.15,z:.665,w:.07,h:.08,d:.02,color:16738858},{x:0,y:-.22,z:.665,w:.3,h:.07,d:.02,color:16738858},{x:0,y:-.28,z:.665,w:.17,h:.07,d:.02,color:16738858},{x:-.07,y:-.34,z:.665,w:.07,h:.07,d:.02,color:16738858},{x:.07,y:-.34,z:.665,w:.07,h:.07,d:.02,color:16738858});return ut(ke(s))}const dg=[".oo..oo.","oxxooxxo","oxwxxxxo","oxxxxxxo",".oxxxxo.","..oxxo..","...oo..."],ug=["....o....","...oxo...","oooxxxooo",".oxxwxxo.","..oxxxo..",".oxxoxxo.",".oxo.oxo.",".oo...oo."];function Nc(i){const t=[];let n=pt;if(i==="sunglasses"){n=2763315;for(const r of[-1,1])t.push({x:r*.27,y:.02,z:.7,w:.36,h:.26,d:.04,color:n},{x:r*.27,y:.015,z:.7+.015,w:.3,h:.19,d:.02,color:1052696},{x:r*.27-.08,y:.07,z:.7+.027,w:.06,h:.04,d:.01,color:5925504});t.push({x:0,y:.08,z:.7,w:.2,h:.05,d:.04,color:n})}else{const r=i==="heartGlasses";n=r?14169466:15759888;const s={o:n,x:r?16743096:16765501,w:ne};for(const a of[-1,1])Mi(r?dg:ug,s,a*.29,r?.05:.04,.7,r?.045:.04,.04,t);t.push({x:0,y:.1,z:.7,w:.22,h:.045,d:.04,color:n})}for(const r of[-1,1])t.push({x:r*.56,y:.09,z:.7,w:.2,h:.05,d:.04,color:n}),t.push({x:r*.645,y:.09,z:.36,w:.03,h:.05,d:.72,color:n});return ut(ke(t))}function kc(i){const e=new Pe;if(i==="cap")e.add(ke([{x:0,y:.8,z:-.02,w:1.44,h:.42,d:1.44,color:15020080},{x:0,y:1.05,z:-.02,w:1.2,h:.08,d:1.2,color:15020080},{x:0,y:1.12,z:-.02,w:.2,h:.08,d:.2,color:ne},{x:0,y:.6,z:1,w:1.3,h:.08,d:.6,color:12723236},{x:0,y:.82,z:.71,w:.36,h:.22,d:.03,color:ne},{x:0,y:.82,z:.725,w:.16,h:.1,d:.02,color:15020080}]));else if(i==="sunhat")e.add(ke([{x:0,y:.82,z:-.02,w:1.44,h:.46,d:1.44,color:15913594},{x:0,y:1.07,z:-.02,w:1.2,h:.06,d:1.2,color:15913594},{x:0,y:.6,z:-.02,w:2.5,h:.08,d:2.5,color:16178316},{x:0,y:.66,z:-.02,w:1.48,h:.12,d:1.48,color:16740264}],sg(),.5),ke([{x:.5,y:.7,z:.76,w:.24,h:.08,d:.04,color:ne},{x:.5,y:.7,z:.76,w:.08,h:.24,d:.04,color:ne},{x:.5,y:.7,z:.785,w:.09,h:.09,d:.03,color:16757530}]));else if(i==="bucket")e.add(ke([{x:0,y:.85,z:-.02,w:1.44,h:.5,d:1.44,color:4172378},{x:0,y:1.13,z:-.02,w:1.28,h:.08,d:1.28,color:4172378},{x:0,y:.65,z:-.02,w:1.48,h:.1,d:1.48,color:2785088},{x:0,y:.6,z:-.02,w:1.75,h:.08,d:1.75,color:4172378},{x:0,y:.53,z:-.02,w:1.95,h:.07,d:1.95,color:5226602},{x:.42,y:.86,z:.71,w:.16,h:.16,d:.03,color:16765501}]));else if(i==="durian"){const r=[{x:0,y:.95,z:-.02,w:1.5,h:.75,d:1.5,color:10275898},{x:0,y:1.42,z:-.02,w:1.1,h:.22,d:1.1,color:10275898},{x:0,y:1.62,z:-.02,w:.14,h:.22,d:.14,color:8016424},{x:.07,y:1.72,z:-.02,w:.18,h:.06,d:.08,color:8016424}];for(const a of[-1,1])r.push({x:a*.3,y:.95,z:.735,w:.05,h:.72,d:.04,color:15913290}),r.push({x:.755*a,y:.95,z:.2,w:.04,h:.72,d:.05,color:15913290});const s=(a,o,l,c=.17)=>r.push({x:a,y:o,z:l,w:c,h:c,d:c,color:7313950,rx:Math.PI/4,rz:Math.PI/4});for(const a of[.72,1.12])for(const o of[-.5,0,.5])s(o,a,.77),s(o,a,-.81),s(.77,a,o),s(-.77,a,o);for(const[a,o]of[[-.45,-.45],[.45,-.45],[-.45,.45],[.45,.45],[0,.5],[0,-.55],[.5,0],[-.5,0]])s(a,1.34,o-.02,.15);for(const[a,o]of[[-.3,-.3],[.3,-.3],[-.3,.3],[.3,.3]])s(a,1.54,o-.02,.13);e.add(ke(r))}else if(i==="crown"){const r=[{x:0,y:.8,z:-.02,w:1.26,h:.12,d:1.26,color:12591162},{x:0,y:.6,z:-.02,w:1.5,h:.07,d:1.5,color:14193166}];for(const s of[-1,1]){r.push({x:0,y:.74,z:s*.67-.02,w:1.44,h:.3,d:.1,color:16761370}),r.push({x:s*.67,y:.74,z:-.02,w:.1,h:.3,d:1.44,color:16761370});for(const a of[-.55,0,.55])r.push({x:a,y:.97,z:s*.67-.02,w:.24,h:.16,d:.1,color:16761370}),r.push({x:a,y:1.09,z:s*.67-.02,w:.1,h:.08,d:.1,color:16761370}),r.push({x:s*.67,y:.97,z:a-.02,w:.1,h:.16,d:.24,color:16761370}),r.push({x:s*.67,y:1.09,z:a-.02,w:.1,h:.08,d:.1,color:16761370})}r.push({x:0,y:.74,z:.71,w:.16,h:.16,d:.04,color:15015994},{x:-.42,y:.74,z:.71,w:.12,h:.12,d:.04,color:3112928},{x:.42,y:.74,z:.71,w:.12,h:.12,d:.04,color:3112928},{x:0,y:.98,z:.71,w:.08,h:.08,d:.03,color:16743096},{x:.73,y:.74,z:-.02,w:.04,h:.14,d:.14,color:4177738},{x:-.73,y:.74,z:-.02,w:.04,h:.14,d:.14,color:4177738},{x:0,y:.74,z:-.75,w:.14,h:.14,d:.04,color:15015994}),e.add(ke(r,ls()))}else if(i==="beanie"){const n=ne,r=[{x:0,y:.85,z:-.02,w:1.44,h:.42,d:1.44,color:16743060},{x:0,y:.92,z:-.02,w:1.46,h:.08,d:1.46,color:n},{x:0,y:1.1,z:-.02,w:1.2,h:.1,d:1.2,color:16743060},{x:0,y:1.18,z:-.02,w:.84,h:.08,d:.84,color:16743060},{x:0,y:.67,z:-.02,w:1.52,h:.2,d:1.52,color:n},{x:0,y:1.38,z:-.02,w:.34,h:.34,d:.34,color:n},{x:0,y:1.38,z:-.02,w:.42,h:.24,d:.24,color:n},{x:0,y:1.38,z:-.02,w:.24,h:.24,d:.42,color:n},{x:0,y:1.38,z:-.02,w:.24,h:.42,d:.24,color:n}];for(let s=-4;s<=4;s++){const a=s*.16;r.push({x:a,y:.67,z:.745,w:.04,h:.2,d:.02,color:15261910}),r.push({x:a,y:.67,z:-.785,w:.04,h:.2,d:.02,color:15261910}),r.push({x:.765,y:.67,z:a-.02,w:.02,h:.2,d:.04,color:15261910}),r.push({x:-.765,y:.67,z:a-.02,w:.02,h:.2,d:.04,color:15261910})}e.add(ke(r,lg()))}else if(i==="chef"){const r=[{x:0,y:.73,z:-.02,w:1.44,h:.3,d:1.44,color:16514043},{x:0,y:.86,z:-.02,w:1.46,h:.04,d:1.46,color:14541802},{x:0,y:1.14,z:-.02,w:1.56,h:.52,d:1.56,color:16514043},{x:0,y:1.48,z:-.02,w:.84,h:.28,d:.84,color:16514043}];for(const[s,a]of[[-.38,-.38],[.38,-.38],[-.38,.38],[.38,.38]])r.push({x:s,y:1.44,z:a-.02,w:.68,h:.2,d:.68,color:16514043});for(const s of[-.5,-.17,.17,.5])r.push({x:s,y:1.12,z:.765,w:.03,h:.44,d:.02,color:14541802}),r.push({x:s,y:1.12,z:-.805,w:.03,h:.44,d:.02,color:14541802}),r.push({x:.785,y:1.12,z:s-.02,w:.02,h:.44,d:.03,color:14541802}),r.push({x:-.785,y:1.12,z:s-.02,w:.02,h:.44,d:.03,color:14541802});e.add(ke(r))}else{const t=[16731998,16765501,4172031,5233015],n=[];for(let s=0;s<4;s++){const a=s%2?.36:-.36,o=s<2?.34:-.38;n.push({x:a,y:.79,z:o,w:.72,h:.42,d:.72,color:t[s]}),n.push({x:a*.85,y:1.04,z:o*.85-.01,w:.6,h:.08,d:.6,color:t[s]})}n.push({x:0,y:.6,z:.98,w:1.3,h:.08,d:.56,color:3112928},{x:0,y:1.17,z:-.02,w:.16,h:.12,d:.16,color:16765501},{x:0,y:1.3,z:-.02,w:.07,h:.18,d:.07,color:9081758}),e.add(ke(n));const r=new Pe;r.name="fan",r.position.set(0,1.42,-.02),r.add(ke([{x:0,y:0,z:0,w:.12,h:.1,d:.12,color:16731998},{x:.33,y:0,z:0,w:.52,h:.04,d:.16,color:16731998,rx:.35},{x:-.33,y:0,z:0,w:.52,h:.04,d:.16,color:4172031,rx:-.35}])),e.add(r)}return e}function Xn(i,e){return[{x:0,y:0,z:0,w:.99,h:.94,d:.59,color:i},{x:0,y:.47,z:0,w:.52,h:.04,d:.42,color:e}]}function Zi(i,e,t,n=0,r){const a=Math.cos(n),o=Math.sin(n);for(const[l,c,h]of[[0,.05,ne],[0,-.05,ne],[.05,0,ne],[-.05,0,ne],[0,0,16765501]])r.push({x:i+l*a,y:e+c,z:t-l*o,w:.05,h:.05,d:.02,color:h,ry:n})}function Fc(i){let e=null,t;if(i==="sgTee")t=Xn(15217212,ne),t.push({x:0,y:-.44,z:0,w:1,h:.06,d:.6,color:12853290}),Mi(["..WWW......",".WW.....W..","WW.........","W.....W...W","WW.........",".WW....W.W.","..WWW......"],{W:ne},-.2,.2,.3,.035,.02,t),Mi([".WW.WW.","WWWWWWW","WWWWWWW",".WWWWW.","..WWW..","...W..."],{W:ne},.2,-.13,.3,.04,.02,t);else if(i==="flowerDress"){t=Xn(16748480,ne),t.push({x:0,y:-.41,z:0,w:1.01,h:.08,d:.61,color:15887014},{x:0,y:-.55,z:0,w:1.03,h:.2,d:.64,color:16748480},{x:0,y:-.75,z:0,w:1.15,h:.2,d:.78,color:16748480},{x:0,y:-.95,z:0,w:1.27,h:.22,d:.92,color:16748480},{x:0,y:-1.035,z:0,w:1.29,h:.05,d:.94,color:ne},{x:.3,y:-.41,z:.315,w:.18,h:.1,d:.04,color:15887014},{x:.3,y:-.41,z:.335,w:.06,h:.06,d:.02,color:ne});for(const[s,a]of[[-.25,.15],[.22,-.05]])Zi(s,a,.305,0,t);for(const[s,a]of[[-.4,-.75],[.12,-.75],[-.2,-.95],[.35,-.95]]){const o=(a<-.85?.92:.78)/2+.01;Zi(s,a,o,0,t),Zi(-s,a,-o,Math.PI,t)}for(const s of[-1,1])Zi(s*.585,-.75,.1,s*Math.PI/2,t),Zi(s*.645,-.95,-.2,s*Math.PI/2,t)}else if(i==="raincoat"){t=Xn(16765471,16765471),t.push({x:0,y:-.625,z:0,w:1.01,h:.36,d:.61,color:16765471},{x:0,y:-.78,z:0,w:1.03,h:.05,d:.63,color:15250432},{x:-.02,y:-.17,z:.3,w:.03,h:1.24,d:.03,color:15250432},{x:-.28,y:-.52,z:.31,w:.24,h:.06,d:.03,color:15250432},{x:.28,y:-.52,z:.31,w:.24,h:.06,d:.03,color:15250432},{x:0,y:.5,z:-.12,w:.6,h:.12,d:.2,color:16765471},{x:-.25,y:.5,z:.1,w:.1,h:.12,d:.3,color:16765471},{x:.25,y:.5,z:.1,w:.1,h:.12,d:.3,color:16765471});for(const a of[.25,0,-.25,-.5])t.push({x:.08,y:a,z:.305,w:.08,h:.08,d:.03,color:3104688});const s=[{x:0,y:.84,z:-.11,w:1.66,h:.14,d:1.52,color:16765471},{x:0,y:1.1,z:-.11,w:1.4,h:.4,d:1.34,color:16765471},{x:0,y:.24,z:-.86,w:1.66,h:1.2,d:.12,color:16765471},{x:0,y:1.305,z:-.11,w:.04,h:.01,d:1.34,color:15250432},{x:0,y:1.1,z:-.785,w:.04,h:.4,d:.01,color:15250432},{x:0,y:.24,z:-.925,w:.04,h:1.2,d:.01,color:15250432},{x:0,y:.8,z:.62,w:1.66,h:.22,d:.14,color:15250432}];for(const a of[-1,1])s.push({x:a*.78,y:.24,z:-.11,w:.1,h:1.2,d:1.52,color:16765471},{x:a*.69,y:.18,z:.62,w:.16,h:1.04,d:.14,color:15250432},{x:a*.5,y:-.5,z:.66,w:.03,h:.26,d:.03,color:ne},{x:a*.5,y:-.65,z:.66,w:.06,h:.06,d:.06,color:3104688});e=ut(ke(s))}else if(i==="fireSuit"){t=Xn(14247979,14247979),t.push({x:0,y:-.6,z:0,w:1.01,h:.32,d:.61,color:14247979},{x:0,y:-.75,z:0,w:1.03,h:.05,d:.63,color:11554588},{x:0,y:.47,z:0,w:.62,h:.1,d:.5,color:11554588},{x:0,y:-.15,z:0,w:1.03,h:.1,d:.63,color:16773466},{x:0,y:-.15,z:0,w:1.035,h:.04,d:.635,color:14212580},{x:0,y:-.52,z:0,w:1.03,h:.1,d:.63,color:16773466},{x:0,y:-.52,z:0,w:1.035,h:.04,d:.635,color:14212580},{x:-.25,y:.16,z:.305,w:.1,h:.55,d:.02,color:16773466},{x:.25,y:.16,z:.305,w:.1,h:.55,d:.02,color:16773466},{x:0,y:.05,z:.31,w:.06,h:.6,d:.03,color:pt},{x:0,y:.3,z:-.305,w:.96,h:.1,d:.02,color:16773466});const o=16761370;e=ut(ke([{x:0,y:.82,z:0,w:1.46,h:.55,d:1.46,color:o},{x:0,y:1.15,z:0,w:.3,h:.2,d:1.5,color:o},{x:0,y:.55,z:-.08,w:1.66,h:.12,d:1.86,color:o},{x:0,y:.85,z:.75,w:.4,h:.4,d:.08,color:15020080},{x:0,y:.85,z:.795,w:.16,h:.16,d:.02,color:16773466}]))}else if(i==="fireSuitPro")t=Xn(13949407,11120824),t.push({x:0,y:-.6,z:0,w:1.01,h:.32,d:.61,color:13949407},{x:0,y:-.75,z:0,w:1.03,h:.05,d:.63,color:11120824},{x:0,y:-.15,z:0,w:1.03,h:.08,d:.63,color:11120824},{x:0,y:-.45,z:0,w:1.03,h:.08,d:.63,color:11120824},{x:0,y:.05,z:.305,w:.06,h:.8,d:.02,color:11120824},{x:0,y:0,z:-.42,w:.42,h:.7,d:.26,color:15263976},{x:0,y:.4,z:-.42,w:.14,h:.12,d:.14,color:14164010}),e=ut(ke([{x:0,y:.2,z:-.02,w:1.5,h:1.5,d:1.5,color:13949407},{x:0,y:-.55,z:-.05,w:1.6,h:.3,d:1.6,color:13949407},{x:0,y:.25,z:.74,w:1.1,h:.6,d:.06,color:15774762},{x:-.3,y:.4,z:.775,w:.2,h:.12,d:.02,color:16774064},{x:0,y:.98,z:0,w:.5,h:.1,d:.5,color:11120824}]));else if(i==="fireSuitHero"){t=Xn(11867678,16763194),t.push({x:0,y:-.6,z:0,w:1.01,h:.32,d:.61,color:11867678},{x:0,y:-.75,z:0,w:1.03,h:.05,d:.63,color:8261397},{x:0,y:-.15,z:0,w:1.03,h:.1,d:.63,color:16763194},{x:0,y:-.52,z:0,w:1.03,h:.1,d:.63,color:16763194},{x:0,y:.3,z:0,w:1.03,h:.06,d:.63,color:16763194},{x:-.12,y:.15,z:.305,w:.07,h:.07,d:.02,color:16763194},{x:.12,y:.15,z:.305,w:.07,h:.07,d:.02,color:16763194},{x:-.12,y:-.35,z:.305,w:.07,h:.07,d:.02,color:16763194},{x:.12,y:-.35,z:.305,w:.07,h:.07,d:.02,color:16763194},{x:.3,y:.15,z:.305,w:.16,h:.18,d:.02,color:16763194},{x:.3,y:.15,z:.315,w:.08,h:.1,d:.02,color:11867678},{x:0,y:-.2,z:-.305,w:.5,h:1,d:.02,color:8261397});const a=[{x:0,y:.82,z:0,w:1.46,h:.55,d:1.46,color:16763194},{x:0,y:1.15,z:0,w:.3,h:.24,d:1.5,color:16763194},{x:0,y:.55,z:-.08,w:1.66,h:.12,d:1.86,color:14723104},{x:0,y:.85,z:.75,w:.46,h:.46,d:.08,color:11867678}];Mi(["..W..","WWWWW",".WWW.",".W.W."],{W:16774064},0,.85,.8,.07,.02,a),e=ut(ke(a))}else t=Xn(14164010,ne),t.push({x:-.07,y:.38,z:.3,w:.06,h:.16,d:.02,color:ne,rz:.5},{x:.07,y:.38,z:.3,w:.06,h:.16,d:.02,color:ne,rz:-.5},{x:0,y:.455,z:0,w:1,h:.04,d:.6,color:12064800},{x:0,y:-.44,z:0,w:1,h:.06,d:.6,color:ne},{x:.505,y:0,z:0,w:.02,h:.94,d:.14,color:ne},{x:-.505,y:0,z:0,w:.02,h:.94,d:.14,color:ne},{x:.22,y:.2,z:.3,w:.14,h:.16,d:.02,color:ne},{x:.22,y:.2,z:.31,w:.08,h:.1,d:.02,color:14164010}),Mi(cg([".W..WWW","WW..W.W",".W..W.W",".W..W.W","WWW.WWW"]),{W:ne},0,-.02,-.3,.08,.02,t);return{body:ut(ke(t)),head:e}}function Oc(i){let e;if(i==="rainboots")e=[{x:0,y:0,z:0,w:.44,h:.26,d:.54,color:3123786},{x:0,y:-.115,z:0,w:.46,h:.04,d:.56,color:2062900},{x:0,y:.225,z:-.05,w:.44,h:.25,d:.44,color:3123786},{x:0,y:.33,z:-.05,w:.46,h:.05,d:.46,color:7330938},{x:0,y:.31,z:-.285,w:.1,h:.12,d:.03,color:16765501},{x:-.09,y:.14,z:.2,w:.08,h:.04,d:.08,color:ne},{x:.09,y:.14,z:.2,w:.08,h:.04,d:.08,color:ne},{x:-.09,y:.165,z:.21,w:.04,h:.02,d:.04,color:pt},{x:.09,y:.165,z:.21,w:.04,h:.02,d:.04,color:pt}];else if(i==="sparkle"){e=[{x:0,y:.005,z:0,w:.44,h:.25,d:.54,color:16743096},{x:0,y:-.115,z:0,w:.46,h:.04,d:.56,color:ne},{x:0,y:0,z:.215,w:.45,h:.18,d:.12,color:16754898},{x:0,y:.14,z:.08,w:.24,h:.05,d:.1,color:16765501},{x:0,y:.15,z:.08,w:.07,h:.06,d:.11,color:16773018}];for(const n of[-1,1]){const r=n*.225;e.push({x:r,y:.02,z:-.06,w:.02,h:.12,d:.04,color:ne},{x:r,y:.02,z:-.06,w:.02,h:.04,d:.12,color:ne},{x:r,y:.07,z:.12,w:.02,h:.04,d:.04,color:16769354},{x:r,y:-.05,z:.1,w:.02,h:.03,d:.03,color:ne},{x:r,y:.08,z:-.19,w:.02,h:.03,d:.03,color:16769354})}e.push({x:-.12,y:.132,z:-.12,w:.04,h:.02,d:.04,color:16769354},{x:.13,y:.132,z:-.04,w:.04,h:.02,d:.04,color:ne})}else{e=[{x:0,y:.005,z:0,w:.42,h:.23,d:.52,color:hg},{x:0,y:-.105,z:0,w:.46,h:.06,d:.56,color:10119738},{x:0,y:.01,z:.12,w:.44,h:.24,d:.08,color:8013088},{x:0,y:.01,z:-.08,w:.44,h:.24,d:.07,color:8013088},{x:0,y:-.04,z:-.24,w:.44,h:.08,d:.06,color:8013088},{x:.225,y:-.04,z:-.16,w:.03,h:.08,d:.2,color:8013088},{x:-.225,y:-.04,z:-.16,w:.03,h:.08,d:.2,color:8013088},{x:.225,y:.01,z:-.08,w:.03,h:.06,d:.06,color:16765501}];for(const n of[-.14,-.05,.04,.13])e.push({x:n,y:.05,z:.255,w:.07,h:.07,d:.03,color:16765108})}return ut(ke(e))}function rn(i,e,t,n){const r=new Pe;return r.position.set(i,e,t),r.add(ke(n)),r}function fg(i){const e=new Pe,t=[],n=[];let r=null;const s=(a,o,l,c,h,d,u)=>{for(const[p,g]of[[-o,l],[o,l],[-o,c],[o,c]]){const x=rn(p,a,g,[{x:0,y:-a/2+.03,z:0,w:h,h:a-.06,d:h,color:d},{x:0,y:-a+.035,z:.01,w:h+.02,h:.07,d:h+.04,color:u}]);t.push(x),e.add(x)}};if(i==="cat"){const l=[{x:0,y:.5,z:0,w:.48,h:.38,d:.85,color:16751162},{x:0,y:.36,z:.05,w:.4,h:.12,d:.6,color:16773856},{x:0,y:.8,z:.5,w:.52,h:.44,d:.42,color:16751162},{x:0,y:.69,z:.72,w:.24,h:.13,d:.04,color:16773856},{x:0,y:.76,z:.74,w:.07,h:.05,d:.03,color:16743080},{x:-.13,y:.85,z:.715,w:.09,h:.11,d:.02,color:4177738},{x:.13,y:.85,z:.715,w:.09,h:.11,d:.02,color:4177738},{x:-.13,y:.85,z:.73,w:.04,h:.1,d:.02,color:pt},{x:.13,y:.85,z:.73,w:.04,h:.1,d:.02,color:pt},{x:-.27,y:.72,z:.7,w:.16,h:.02,d:.02,color:ne},{x:.27,y:.72,z:.7,w:.16,h:.02,d:.02,color:ne},{x:-.17,y:1.07,z:.46,w:.14,h:.12,d:.1,color:16751162},{x:.17,y:1.07,z:.46,w:.14,h:.12,d:.1,color:16751162},{x:-.17,y:1.15,z:.46,w:.07,h:.06,d:.1,color:16751162},{x:.17,y:1.15,z:.46,w:.07,h:.06,d:.1,color:16751162},{x:-.17,y:1.07,z:.515,w:.07,h:.08,d:.02,color:16751296},{x:.17,y:1.07,z:.515,w:.07,h:.08,d:.02,color:16751296},{x:0,y:1.025,z:.5,w:.06,h:.02,d:.3,color:13657626},{x:-.12,y:1.025,z:.52,w:.05,h:.02,d:.2,color:13657626},{x:.12,y:1.025,z:.52,w:.05,h:.02,d:.2,color:13657626}];for(const c of[-.28,-.04,.2])l.push({x:0,y:.56,z:c,w:.5,h:.28,d:.09,color:13657626});e.add(ke(l)),s(.34,.14,.28,-.28,.13,16751162,ne),r=rn(0,.62,-.4,[{x:0,y:.14,z:-.08,w:.1,h:.3,d:.1,color:16751162,rx:-.4},{x:0,y:.38,z:-.15,w:.1,h:.22,d:.1,color:13657626,rx:-.15}])}else if(i==="dog")e.add(ke([{x:0,y:.55,z:0,w:.52,h:.42,d:.9,color:11035695},{x:0,y:.4,z:.1,w:.42,h:.12,d:.6,color:14725242},{x:0,y:.9,z:.55,w:.5,h:.46,d:.46,color:11035695},{x:0,y:.8,z:.86,w:.3,h:.22,d:.22,color:14725242},{x:0,y:.88,z:.98,w:.12,h:.08,d:.04,color:pt},{x:0,y:.67,z:.94,w:.1,h:.1,d:.06,color:16743066},{x:-.12,y:1,z:.785,w:.08,h:.1,d:.02,color:pt},{x:.12,y:1,z:.785,w:.08,h:.1,d:.02,color:pt},{x:-.1,y:1.03,z:.795,w:.03,h:.03,d:.02,color:ne},{x:.14,y:1.03,z:.795,w:.03,h:.03,d:.02,color:ne},{x:-.29,y:.9,z:.52,w:.1,h:.34,d:.2,color:6961690},{x:.29,y:.9,z:.52,w:.1,h:.34,d:.2,color:6961690},{x:0,y:1.14,z:.52,w:.5,h:.03,d:.2,color:6961690},{x:0,y:.72,z:.38,w:.54,h:.08,d:.18,color:15020080},{x:0,y:.66,z:.48,w:.08,h:.08,d:.03,color:16765501},{x:.1,y:.77,z:-.15,w:.3,h:.02,d:.3,color:6961690}])),s(.36,.15,.3,-.3,.15,11035695,14725242),r=rn(0,.7,-.44,[{x:0,y:.13,z:-.08,w:.1,h:.3,d:.1,color:11035695,rx:-.5}]);else if(i==="bird"){e.add(ke([{x:0,y:.36,z:0,w:.4,h:.44,d:.44,color:4181834},{x:0,y:.3,z:.2,w:.32,h:.28,d:.06,color:11923306},{x:0,y:.72,z:.06,w:.38,h:.34,d:.36,color:4181834},{x:0,y:.7,z:.235,w:.36,h:.26,d:.02,color:16730682},{x:0,y:.6,z:.225,w:.38,h:.1,d:.02,color:16751146},{x:0,y:.66,z:.3,w:.12,h:.12,d:.12,color:16757530},{x:0,y:.61,z:.33,w:.08,h:.05,d:.06,color:14191120},{x:-.12,y:.77,z:.25,w:.07,h:.08,d:.02,color:pt},{x:.12,y:.77,z:.25,w:.07,h:.08,d:.02,color:pt},{x:-.1,y:.79,z:.26,w:.025,h:.025,d:.01,color:ne},{x:.14,y:.79,z:.26,w:.025,h:.025,d:.01,color:ne}]));for(const l of[-1,1]){const c=rn(l*.21,.54,0,[{x:l*.03,y:-.17,z:-.03,w:.06,h:.36,d:.36,color:2398778},{x:l*.035,y:-.31,z:-.12,w:.05,h:.1,d:.2,color:3112928}]);n.push(c),e.add(c);const h=rn(l*.09,.14,.02,[{x:0,y:-.06,z:0,w:.05,h:.1,d:.05,color:10127994},{x:0,y:-.12,z:.03,w:.1,h:.03,d:.12,color:10127994}]);t.push(h),e.add(h)}r=rn(0,.24,-.2,[{x:0,y:-.02,z:-.15,w:.24,h:.06,d:.3,color:2398778,rx:.35},{x:0,y:-.07,z:-.3,w:.16,h:.05,d:.08,color:3112928,rx:.35}])}else{e.add(ke([{x:0,y:.58,z:0,w:.46,h:.42,d:.6,color:12607530},{x:0,y:.45,z:.12,w:.4,h:.2,d:.4,color:5909018},{x:0,y:.86,z:.24,w:.3,h:.4,d:.3,color:15768106},{x:0,y:.76,z:.27,w:.36,h:.18,d:.32,color:16758858},{x:0,y:1.1,z:.28,w:.08,h:.08,d:.28,color:14690858},{x:0,y:1.17,z:.36,w:.08,h:.08,d:.07,color:14690858},{x:0,y:1.17,z:.22,w:.08,h:.08,d:.07,color:14690858},{x:0,y:.92,z:.44,w:.1,h:.08,d:.12,color:16764730},{x:0,y:.82,z:.42,w:.07,h:.12,d:.05,color:14690858},{x:-.12,y:.96,z:.39,w:.06,h:.06,d:.02,color:pt},{x:.12,y:.96,z:.39,w:.06,h:.06,d:.02,color:pt},{x:-.155,y:.94,z:.3,w:.02,h:.1,d:.1,color:14690858},{x:.155,y:.94,z:.3,w:.02,h:.1,d:.1,color:14690858}]));for(const c of[-1,1]){const h=rn(c*.24,.72,.02,[{x:c*.02,y:-.13,z:-.04,w:.06,h:.3,d:.44,color:9058842},{x:c*.025,y:-.24,z:-.12,w:.05,h:.1,d:.3,color:2046522}]);n.push(h),e.add(h);const d=rn(c*.12,.38,.04,[{x:0,y:-.18,z:0,w:.07,h:.34,d:.07,color:15909434},{x:0,y:-.36,z:.04,w:.16,h:.04,d:.2,color:15909434}]);t.push(d),e.add(d)}r=rn(0,.68,-.28,[{x:0,y:.18,z:-.06,w:.3,h:.4,d:.1,color:2046522,rx:-.35},{x:0,y:.36,z:-.2,w:.22,h:.3,d:.08,color:1585192,rx:-.8},{x:0,y:.38,z:-.36,w:.16,h:.12,d:.14,color:2775626,rx:-1.2}])}return r&&e.add(r),{root:e,legs:t,wings:n,tail:r}}function Hc(){const i=new Pe;i.add(ke([{x:0,y:-.27,z:0,w:.64,h:.05,d:.44,color:15916960},{x:-.18,y:-.24,z:.08,w:.08,h:.03,d:.08,color:16751296},{x:.12,y:-.24,z:-.1,w:.08,h:.03,d:.08,color:10147583},{x:.22,y:-.18,z:-.12,w:.05,h:.14,d:.05,color:4177738},{x:.25,y:-.08,z:-.12,w:.05,h:.1,d:.05,color:5233015},{x:0,y:.3,z:.245,w:.74,h:.05,d:.05,color:15136767},{x:0,y:.3,z:-.245,w:.74,h:.05,d:.05,color:15136767},{x:.345,y:.3,z:0,w:.05,h:.05,d:.44,color:15136767},{x:-.345,y:.3,z:0,w:.05,h:.05,d:.44,color:15136767}]));const e=new Pe;e.add(ke([{x:0,y:0,z:0,w:.09,h:.11,d:.16,color:16747034},{x:0,y:0,z:-.11,w:.02,h:.13,d:.07,color:16760906},{x:0,y:.07,z:-.01,w:.02,h:.04,d:.07,color:16760906},{x:-.046,y:.02,z:.05,w:.01,h:.025,d:.025,color:pt},{x:.046,y:.02,z:.05,w:.01,h:.025,d:.025,color:pt}])),e.position.set(0,-.04,0),e.rotation.y=Math.PI/2,i.add(e);const t=new Ge(ts([{x:0,y:-.06,z:0,w:.64,h:.4,d:.44,color:ne}]),og());t.renderOrder=1,i.add(t);const n=new Ge(ts([{x:0,y:0,z:0,w:.7,h:.6,d:.5,color:ne}]),Uc());return n.renderOrder=2,i.add(n),{root:i,fish:e,water:t}}function pg(){const e=new Pe;return e.add(ke([{x:0,y:.27,z:0,w:.2,h:.08,d:.22,color:2056144},{x:0,y:.08,z:0,w:.17,h:.32,d:.2,color:16747034},{x:0,y:.03,z:.13,w:.07,h:.15,d:.08,color:16765501},{x:0,y:-.12,z:0,w:.15,h:.08,d:.15,color:13160150},{x:0,y:-.82,z:0,w:.09,h:1.36,d:.09,color:16747034},{x:0,y:-.82,z:.046,w:.03,h:1.3,d:.01,color:16765088},{x:0,y:-.55,z:0,w:.11,h:.05,d:.11,color:ne},{x:0,y:-1.05,z:0,w:.11,h:.05,d:.11,color:ne},{x:0,y:-1.52,z:0,w:.4,h:.12,d:.22,color:3112928},{x:-.17,y:-1.66,z:0,w:.08,h:.22,d:.2,color:3112928},{x:.17,y:-1.66,z:0,w:.08,h:.22,d:.2,color:3112928},{x:-.11,y:-1.76,z:0,w:.1,h:.06,d:.2,color:2056144},{x:.11,y:-1.76,z:0,w:.1,h:.06,d:.2,color:2056144}],ls())),e.rotation.x=-.68,ut(e)}function Bc(){return ut(ke([{x:0,y:-.07,z:0,w:.25,h:.36,d:.25,color:2078120},{x:0,y:-.07,z:0,w:.26,h:.06,d:.26,color:ne},{x:0,y:.13,z:0,w:.2,h:.04,d:.2,color:2078120},{x:0,y:.18,z:0,w:.22,h:.08,d:.22,color:ne},{x:0,y:.235,z:0,w:.04,h:.03,d:.16,color:ne},{x:0,y:.215,z:.06,w:.04,h:.03,d:.04,color:ne},{x:0,y:.215,z:-.06,w:.04,h:.03,d:.04,color:ne},{x:0,y:0,z:.127,w:.04,h:.04,d:.01,color:ne},{x:0,y:-.15,z:.127,w:.08,h:.08,d:.01,color:ne},{x:0,y:-.2,z:.127,w:.06,h:.04,d:.01,color:ne}],ls()))}function Gc(){const i=[16731998,16765501,4172031,5233015],e=[{x:0,y:1.34,z:0,w:.07,h:2.6,d:.07,color:9081758},{x:0,y:.18,z:0,w:.13,h:.36,d:.13,color:9062954},{x:0,y:.03,z:.1,w:.12,h:.06,d:.3,color:9062954},{x:0,y:.1,z:.22,w:.12,h:.14,d:.07,color:9062954},{x:0,y:3.06,z:0,w:.12,h:.14,d:.12,color:9081758}],t=[[4,.65,2.66],[3,.6,2.8],[2,.5,2.93]];for(const[n,r,s]of t)for(let a=0;a<n;a++)for(let o=0;o<n;o++)e.push({x:(a-(n-1)/2)*r,y:s,z:(o-(n-1)/2)*r,w:r,h:.13,d:r,color:i[(a+o)%4]});for(const[n,r]of[[-1.25,-1.25],[1.25,-1.25],[-1.25,1.25],[1.25,1.25]])e.push({x:n,y:2.56,z:r,w:.12,h:.1,d:.12,color:ne});return ut(ke(e))}function Vc(){const i=[[1,2.66,16740264],[.75,2.8,16765501],[.45,2.93,4180192]],e=[{x:0,y:1.34,z:0,w:.06,h:2.6,d:.06,color:13160150},{x:0,y:.18,z:0,w:.12,h:.36,d:.12,color:16740264},{x:0,y:.03,z:.1,w:.11,h:.06,d:.3,color:16740264},{x:0,y:.1,z:.22,w:.11,h:.14,d:.07,color:16740264},{x:0,y:3.06,z:0,w:.1,h:.12,d:.1,color:13160150}];for(const[n,r,s]of i)e.push({x:0,y:r,z:0,w:n*2,h:.13,d:n*2,color:s});const t=(n,r,s)=>e.push({x:n,y:r,z:s,w:.13,h:.01,d:.13,color:ne});for(const n of[-.6,0,.6])t(n,2.73,.88),t(n,2.73,-.88),t(.88,2.73,n),t(-.88,2.73,n);for(const[n,r]of[[.88,.88],[-.88,.88],[.88,-.88],[-.88,-.88]])t(n,2.73,r);for(const n of[-.3,.3])t(n,2.87,.6),t(n,2.87,-.6),t(.6,2.87,n),t(-.6,2.87,n);t(0,3,.2),t(0,3,-.2),t(.2,3,0),t(-.2,3,0);for(let n=0;n<4;n++){const r=-.75+n*.5;e.push({x:r,y:2.57,z:1,w:.3,h:.06,d:.03,color:ne}),e.push({x:r,y:2.57,z:-1,w:.3,h:.06,d:.03,color:ne}),e.push({x:1,y:2.57,z:r,w:.03,h:.06,d:.3,color:ne}),e.push({x:-1,y:2.57,z:r,w:.03,h:.06,d:.3,color:ne})}for(const[n,r]of[[-.96,-.96],[.96,-.96],[-.96,.96],[.96,.96]])e.push({x:n,y:2.56,z:r,w:.1,h:.1,d:.1,color:16740264});return ut(ke(e))}function Qo(i=4172031,e=16740264,t=13160150){return ut(ke([{x:0,y:.16,z:0,w:.56,h:.08,d:1.24,color:i},{x:0,y:.205,z:-.05,w:.48,h:.01,d:.95,color:3817287},{x:0,y:.1,z:.62,w:.14,h:.2,d:.2,color:2763306},{x:0,y:.1,z:-.62,w:.14,h:.2,d:.2,color:2763306},{x:0,y:.1,z:.62,w:.16,h:.08,d:.08,color:ne},{x:0,y:.1,z:-.62,w:.16,h:.08,d:.08,color:ne},{x:0,y:.23,z:-.62,w:.14,h:.04,d:.24,color:15020080},{x:0,y:.26,z:.6,w:.16,h:.2,d:.16,color:15020080},{x:0,y:.82,z:.535,w:.09,h:1.14,d:.09,color:t,rx:-.12},{x:0,y:1.39,z:.47,w:.86,h:.08,d:.08,color:t},{x:-.38,y:1.39,z:.47,w:.16,h:.11,d:.11,color:e},{x:.38,y:1.39,z:.47,w:.16,h:.11,d:.11,color:e}]))}function Wc(){const i=Qo(16761370,4172031,15020080),e=[{x:-.06,y:.21,z:.25,w:.12,h:.01,d:.22,color:15020080,ry:.5},{x:.05,y:.21,z:.02,w:.12,h:.01,d:.3,color:15020080,ry:-.5},{x:-.05,y:.21,z:-.22,w:.12,h:.01,d:.26,color:15020080,ry:.5}];return i.add(ke(e)),i}function Yc(){const e=[{x:0,y:.16,z:0,w:.62,h:.08,d:1.2,color:9064408},{x:0,y:.21,z:.66,w:.62,h:.08,d:.2,color:9064408,rx:-.45},{x:0,y:.21,z:-.66,w:.62,h:.08,d:.2,color:9064408,rx:.45},{x:0,y:.205,z:0,w:.56,h:.01,d:1.1,color:2763306},{x:0,y:.212,z:0,w:.56,h:.01,d:.14,color:16761370},{x:0,y:.1,z:.4,w:.4,h:.04,d:.08,color:13160150},{x:0,y:.1,z:-.4,w:.4,h:.04,d:.08,color:13160150}];for(const t of[.4,-.4])for(const n of[-.25,.25])e.push({x:n,y:.06,z:t,w:.1,h:.12,d:.12,color:3856032});return ut(ke(e))}function Xc(){const n=[];for(const r of[.85,-.85]){for(const s of[0,Math.PI/4])for(const[a,o,l,c]of[[.52,0,.1,.52*.85],[-.52,0,.1,.52*.85],[0,.52,.52*.85,.1],[0,-.52,.52*.85,.1]]){const h=Math.cos(s),d=Math.sin(s);n.push({x:0,y:.52+a*h-o*d,z:r+o*h+a*d,w:.1,h:l,d:c,color:2763306,rx:s})}n.push({x:0,y:.52,z:r,w:.04,h:.52*1.8,d:.03,color:13160150}),n.push({x:0,y:.52,z:r,w:.04,h:.03,d:.52*1.8,color:13160150}),n.push({x:0,y:.52,z:r,w:.14,h:.12,d:.12,color:ne})}return n.push({x:0,y:.52,z:-.45,w:.08,h:.08,d:.8,color:15020080},{x:0,y:.95,z:-.3,w:.08,h:.7,d:.08,color:15020080,rx:-.25},{x:0,y:.95,z:.3,w:.08,h:.08,d:.95,color:15020080},{x:0,y:.62,z:.3,w:.08,h:.08,d:.95,color:15020080,rx:.65},{x:0,y:.95,z:.8,w:.08,h:.95,d:.08,color:13160150,rx:-.2},{x:0,y:1.27,z:-.38,w:.3,h:.08,d:.42,color:pt},{x:0,y:1.45,z:.72,w:.9,h:.07,d:.07,color:13160150},{x:-.4,y:1.45,z:.72,w:.14,h:.1,d:.1,color:16740264},{x:.4,y:1.45,z:.72,w:.14,h:.1,d:.1,color:16740264},{x:0,y:1.22,z:1.08,w:.5,h:.3,d:.36,color:14263130},{x:0,y:.3,z:0,w:.9,h:.06,d:.06,color:13160150},{x:-.42,y:.3,z:0,w:.2,h:.05,d:.26,color:pt},{x:.42,y:.3,z:0,w:.2,h:.05,d:.26,color:pt}),ut(ke(n))}function qc(){const n=[];for(const r of[.55,-.55])for(const s of[.48,-.48])n.push({x:s,y:.2,z:r,w:.16,h:.4,d:.4,color:2763306},{x:s*1.04,y:.2,z:r,w:.04,h:.18,d:.18,color:13160150});n.push({x:0,y:.32,z:-.05,w:.84,h:.1,d:1.5,color:11016216},{x:.4,y:.5,z:-.2,w:.08,h:.3,d:1.1,color:14690858},{x:-.4,y:.5,z:-.2,w:.08,h:.3,d:1.1,color:14690858},{x:0,y:.5,z:-.78,w:.84,h:.3,d:.08,color:14690858},{x:.445,y:.5,z:-.2,w:.02,h:.06,d:1.1,color:ne},{x:-.445,y:.5,z:-.2,w:.02,h:.06,d:1.1,color:ne},{x:0,y:.6,z:.6,w:.84,h:.5,d:.42,color:14690858},{x:0,y:.92,z:.48,w:.76,h:.14,d:.06,color:10475775},{x:0,y:.46,z:.815,w:.5,h:.2,d:.02,color:13160150},{x:.3,y:.66,z:.815,w:.14,h:.1,d:.02,color:16774832},{x:-.3,y:.66,z:.815,w:.14,h:.1,d:.02,color:16774832},{x:.16,y:.9,z:.68,w:.16,h:.1,d:.12,color:16726586},{x:-.16,y:.9,z:.68,w:.16,h:.1,d:.12,color:3832575},{x:0,y:.95,z:.32,w:.3,h:.3,d:.05,color:pt,rx:-.5},{x:-.5,y:.72,z:-.2,w:.04,h:.04,d:1.2,color:13160150},{x:-.5,y:.6,z:-.2,w:.04,h:.04,d:1.2,color:13160150},{x:0,y:.48,z:-.86,w:.4,h:.3,d:.1,color:16765501},{x:0,y:.48,z:-.92,w:.16,h:.16,d:.04,color:11016216});for(let r=0;r<5;r++)n.push({x:-.5,y:.66,z:-.7+r*.25,w:.04,h:.12,d:.03,color:13160150});return ut(ke(n))}function Kc(){return ut(ke([{x:0,y:.17,z:0,w:.34,h:.34,d:.3,color:12870186},{x:0,y:.2,z:.15,w:.22,h:.22,d:.02,color:15250570},{x:0,y:.47,z:0,w:.34,h:.3,d:.3,color:12870186},{x:0,y:.65,z:-.02,w:.26,h:.08,d:.24,color:10505502},{x:.06,y:.7,z:.02,w:.08,h:.06,d:.08,color:10505502},{x:0,y:.45,z:.155,w:.26,h:.22,d:.02,color:15250570},{x:.06,y:.5,z:.17,w:.05,h:.05,d:.01,color:pt},{x:-.06,y:.5,z:.17,w:.05,h:.05,d:.01,color:pt},{x:.075,y:.515,z:.176,w:.015,h:.015,d:.005,color:ne},{x:-.045,y:.515,z:.176,w:.015,h:.015,d:.005,color:ne},{x:0,y:.4,z:.17,w:.1,h:.025,d:.01,color:10505502},{x:.1,y:.42,z:.165,w:.04,h:.025,d:.01,color:16752053},{x:-.1,y:.42,z:.165,w:.04,h:.025,d:.01,color:16752053},{x:-.21,y:.3,z:.05,w:.08,h:.4,d:.08,color:12870186,rz:-.5},{x:.2,y:.25,z:.06,w:.08,h:.32,d:.08,color:12870186,rz:.2},{x:.1,y:-.02,z:.12,w:.1,h:.16,d:.12,color:12870186},{x:-.1,y:-.02,z:.12,w:.1,h:.16,d:.12,color:12870186},{x:0,y:.33,z:.165,w:.14,h:.05,d:.01,color:3123802}]))}function mg(){const n=ut(ke([{x:0,y:.04,z:0,w:.56,h:.08,d:.46,color:14690858},{x:0,y:.25,z:0,w:.46,h:.34,d:.36,color:16514038},{x:-.12,y:.12,z:.18,w:.12,h:.08,d:.06,color:16514038},{x:.12,y:.12,z:.18,w:.12,h:.08,d:.06,color:16514038},{x:0,y:.57,z:.01,w:.5,h:.3,d:.38,color:16514038},{x:-.17,y:.76,z:0,w:.12,h:.1,d:.1,color:16514038},{x:.17,y:.76,z:0,w:.12,h:.1,d:.1,color:16514038},{x:-.17,y:.755,z:.055,w:.07,h:.07,d:.02,color:14690858},{x:.17,y:.755,z:.055,w:.07,h:.07,d:.02,color:14690858},{x:.02,y:.725,z:-.02,w:.14,h:.02,d:.16,color:16751162},{x:-.11,y:.6,z:.205,w:.1,h:.025,d:.02,color:pt},{x:.11,y:.6,z:.205,w:.1,h:.025,d:.02,color:pt},{x:0,y:.54,z:.205,w:.05,h:.04,d:.02,color:16743080},{x:-.17,y:.52,z:.203,w:.07,h:.04,d:.02,color:16756936},{x:.17,y:.52,z:.203,w:.07,h:.04,d:.02,color:16756936},{x:-.28,y:.53,z:.17,w:.1,h:.015,d:.015,color:9081758},{x:.28,y:.53,z:.17,w:.1,h:.015,d:.015,color:9081758},{x:0,y:.43,z:0,w:.48,h:.05,d:.38,color:14690858},{x:0,y:.39,z:.2,w:.07,h:.07,d:.04,color:16761370},{x:0,y:.24,z:.2,w:.24,h:.28,d:.04,color:16761370},{x:0,y:.24,z:.222,w:.16,h:.2,d:.01,color:16768874},{x:0,y:.24,z:.23,w:.03,h:.12,d:.01,color:13142544},{x:-.14,y:.3,z:.2,w:.1,h:.1,d:.1,color:16514038},{x:0,y:.18,z:-.22,w:.08,h:.08,d:.12,color:16514038}])),r=rn(.27,.36,.14,[{x:.02,y:.12,z:0,w:.1,h:.24,d:.1,color:16514038},{x:.02,y:.28,z:0,w:.13,h:.11,d:.11,color:16514038},{x:.02,y:.28,z:.057,w:.07,h:.06,d:.01,color:16751296}]);return r.name="paw",n.add(r),n}function gg(){return ut(ke([{x:0,y:.235,z:0,w:.36,h:.13,d:.16,color:15020080},{x:-.2,y:.17,z:0,w:.16,h:.14,d:.16,color:15020080},{x:.2,y:.17,z:0,w:.16,h:.14,d:.16,color:15020080},{x:-.2,y:-.02,z:0,w:.16,h:.24,d:.16,color:15020080},{x:.2,y:-.02,z:0,w:.16,h:.24,d:.16,color:15020080},{x:-.2,y:-.22,z:0,w:.16,h:.16,d:.16,color:14212580},{x:.2,y:-.22,z:0,w:.16,h:.16,d:.16,color:14212580},{x:0,y:.25,z:.085,w:.2,h:.03,d:.01,color:16747146}],ls()))}function jg(){const n=[16731998,16765501,4172031,5233015,16751146,16748480,16777215,10117119],r=[{x:0,y:.05,z:0,w:7,h:.1,d:5,color:14273456},{x:0,y:1.8,z:-2.375,w:7,h:3.6,d:.25,color:16049077},{x:-3.375,y:1.8,z:0,w:.25,h:3.6,d:5,color:16049077},{x:3.375,y:1.8,z:0,w:.25,h:3.6,d:5,color:16049077},{x:0,y:3.75,z:0,w:7.2,h:.3,d:5.2,color:15259560},{x:-3.2,y:1.8,z:2.3,w:.45,h:3.6,d:.45,color:3123802},{x:3.2,y:1.8,z:2.3,w:.45,h:3.6,d:.45,color:3123802},{x:0,y:3.45,z:2.35,w:6.4,h:.3,d:.3,color:3123802},{x:0,y:3.75,z:2.68,w:6.6,h:.9,d:.16,color:3123802},{x:0,y:3.75,z:2.77,w:6.3,h:.7,d:.04,color:ne},{x:0,y:3.56,z:0,w:2,h:.06,d:.14,color:ne},{x:1.9,y:.5,z:1.4,w:2.4,h:1,d:.7,color:11893054},{x:1.9,y:1.03,z:1.4,w:2.5,h:.06,d:.8,color:14263402},{x:2.6,y:1.2,z:1.3,w:.5,h:.28,d:.4,color:6252402},{x:2.6,y:1.38,z:1.22,w:.4,h:.1,d:.12,color:5233015},{x:2.75,y:1.1,z:-.6,w:.9,h:2.2,d:1.1,color:ne},{x:2.28,y:1.15,z:-.6,w:.04,h:1.7,d:.9,color:10476799},{x:2.75,y:2.3,z:-.6,w:.9,h:.2,d:1.1,color:15020080}];for(let o=0;o<4;o++)r.push({x:1+o*.32,y:1.18,z:1.5,w:.24,h:.24,d:.24,color:14677247}),r.push({x:1+o*.32,y:1.13,z:1.5,w:.2,h:.12,d:.2,color:n[o]}),r.push({x:1+o*.32,y:1.32,z:1.5,w:.2,h:.05,d:.2,color:15020080});for(const[o,l]of[.85,1.65,2.45].entries()){r.push({x:-.2,y:l,z:-2,w:5.6,h:.07,d:.55,color:11893054}),r.push({x:-2.95,y:l,z:-.4,w:.55,h:.07,d:2.6,color:11893054});for(let c=0;c<11;c++){const h=.25+(c*3+o)%3*.08,d=.3+(c+o)%2*.08;r.push({x:-2.6+c*.47,y:l+.035+h/2,z:-2,w:d,h,d:.3,color:n[(c*3+o*5)%n.length]})}for(let c=0;c<5;c++){const h=.22+(c+o)%3*.08;r.push({x:-2.95,y:l+.035+h/2,z:-1.4+c*.5,w:.3,h,d:.36,color:n[(c*5+o*3+2)%n.length]})}}for(const o of[-3,2.6])r.push({x:o,y:1.7,z:(o<0,-2.05),w:.06,h:2.6,d:.5,color:11893054});for(const[o,l,c,h]of[[-2.5,.3,1.7,15020080],[-2.5,.72,1.7,3112928],[-1.75,.3,1.8,16765501]]){r.push({x:o,y:l,z:c,w:.7,h:.4,d:.5,color:h});for(let d=0;d<3;d++)for(let u=0;u<2;u++)r.push({x:o-.2+d*.2,y:l+.23,z:c-.1+u*.2,w:.1,h:.06,d:.1,color:u?4177738:16751146})}r.push({x:0,y:2.75,z:2,w:6.2,h:.05,d:.05,color:9081758});for(let o=0;o<12;o++){const l=-2.75+o*.5;r.push({x:l,y:2.68,z:2,w:.03,h:.1,d:.03,color:9081758}),r.push({x:l,y:2.46,z:2,w:.3,h:.36,d:.06,color:n[o*3%n.length]}),r.push({x:l,y:2.5,z:2.035,w:.16,h:.12,d:.01,color:o%2?ne:16765501})}const s=.42,a=1.25;for(let o=0;o<10;o++){const l=-3.15+o*.7,c=o%2?ne:3123802;r.push({x:l,y:3.12-Math.sin(s)*a/2,z:2.5+Math.cos(s)*a/2,w:.7,h:.06,d:a,color:c,rx:s}),r.push({x:l,y:3.12-Math.sin(s)*a-.08,z:2.52+Math.cos(s)*a,w:.7,h:.18,d:.05,color:c})}return ut(ke(r,Jo(),.5))}const _g=["GGG.G...GGG.G..G.GGG.GGG","G...G....G..GG.G..G..G..","G...G....G..G.GG..G..G..","G...G....G..G..G..G..G..","GGG.GGG.GGG.G..G.GGG.GGG"];function $g(){const s=[{x:0,y:.05,z:0,w:7,h:.1,d:5,color:15133935},{x:0,y:1.8,z:-2.375,w:7,h:3.6,d:.25,color:16184558},{x:-3.375,y:1.8,z:0,w:.25,h:3.6,d:5,color:16184558},{x:3.375,y:1.8,z:0,w:.25,h:3.6,d:5,color:16184558},{x:0,y:3.85,z:0,w:7.4,h:.5,d:5.4,color:15260864},{x:0,y:4.14,z:0,w:7.4,h:.08,d:5.4,color:13944486},{x:-3.25,y:1.8,z:2.3,w:.5,h:3.6,d:.5,color:15260864},{x:3.25,y:1.8,z:2.3,w:.5,h:3.6,d:.5,color:15260864},{x:0,y:.06,z:2.48,w:7,h:.12,d:.08,color:12107462},{x:0,y:3.25,z:2.3,w:6,h:.7,d:.2,color:16184558},{x:0,y:2.85,z:2.3,w:6,h:.1,d:.14,color:13160150},{x:0,y:.15,z:2.3,w:6,h:.1,d:.14,color:13160150},{x:0,y:1.5,z:2.3,w:.08,h:2.6,d:.14,color:13160150},{x:-1,y:1.5,z:2.3,w:.08,h:2.6,d:.14,color:13160150},{x:1,y:1.5,z:2.3,w:.08,h:2.6,d:.14,color:13160150},{x:-2,y:1.5,z:2.3,w:.06,h:2.6,d:.12,color:13160150},{x:2,y:1.5,z:2.3,w:.06,h:2.6,d:.12,color:13160150},{x:-.15,y:1.25,z:2.39,w:.05,h:.5,d:.05,color:9081758},{x:.15,y:1.25,z:2.39,w:.05,h:.5,d:.05,color:9081758},{x:-.5,y:1.75,z:2.33,w:.3,h:.1,d:.01,color:2071130},{x:-.5,y:1.75,z:2.33,w:.1,h:.3,d:.01,color:2071130},{x:.5,y:1.75,z:2.33,w:.3,h:.1,d:.01,color:2071130},{x:.5,y:1.75,z:2.33,w:.1,h:.3,d:.01,color:2071130},{x:1.5,y:1.6,z:2.33,w:.5,h:.6,d:.01,color:ne},{x:1.5,y:1.78,z:2.335,w:.36,h:.06,d:.01,color:2071130},{x:0,y:3.25,z:2.48,w:6.4,h:.8,d:.16,color:2071130},{x:0,y:3.25,z:2.565,w:6.2,h:.64,d:.04,color:ne},{x:-1.52,y:3.25,z:2.62,w:.5,h:.16,d:.1,color:2071130},{x:-1.52,y:3.25,z:2.62,w:.16,h:.5,d:.1,color:2071130},{x:0,y:3.57,z:0,w:2.4,h:.06,d:.16,color:ne},{x:1.8,y:.55,z:-.9,w:2.6,h:1,d:.7,color:2071130},{x:1.8,y:1.08,z:-.9,w:2.7,h:.06,d:.8,color:ne},{x:2.3,y:1.35,z:-1.05,w:.5,h:.4,d:.06,color:3817287},{x:2.3,y:1.35,z:-1.015,w:.42,h:.32,d:.02,color:10476799},{x:2.3,y:1.13,z:-1.1,w:.14,h:.06,d:.14,color:3817287},{x:1.2,y:1.15,z:-.8,w:.12,h:.08,d:.12,color:16761370},{x:-1.4,y:1.2,z:-2.23,w:1,h:2.2,d:.06,color:10473704},{x:-1.05,y:1.15,z:-2.19,w:.1,h:.06,d:.06,color:9081758},{x:.4,y:1.9,z:-2.235,w:.7,h:.9,d:.03,color:16773824},{x:.4,y:2.1,z:-2.215,w:.5,h:.1,d:.01,color:15015994},{x:.4,y:1.8,z:-2.215,w:.3,h:.3,d:.01,color:5233015},{x:-3.235,y:1.9,z:.6,w:.03,h:.8,d:.6,color:14217471},{x:-3.215,y:2,z:.6,w:.01,h:.2,d:.4,color:3112928},{x:2.85,y:.3,z:1.6,w:.4,h:.4,d:.4,color:14189114},{x:2.85,y:.75,z:1.6,w:.5,h:.5,d:.5,color:4177738},{x:2.85,y:1.1,z:1.6,w:.3,h:.3,d:.3,color:5233015}];Mi(_g,{G:2071130},.45,3.25,2.6,.11,.04,s),s.push({x:-2.95,y:.3,z:.4,w:.12,h:.06,d:2.6,color:9081758});for(let c=0;c<4;c++){const h=-.6+c*.66;s.push({x:-2.85,y:.5,z:h,w:.5,h:.08,d:.5,color:3112928}),s.push({x:-3.08,y:.8,z:h,w:.08,h:.55,d:.5,color:3112928}),s.push({x:-2.85,y:.25,z:h,w:.06,h:.42,d:.06,color:9081758})}const a=2.4,o=2.8;s.push({x:a,y:.45,z:o,w:.46,h:.06,d:.46,color:3112928},{x:a,y:.78,z:o-.21,w:.46,h:.46,d:.05,color:3112928,rx:-.1},{x:a,y:.86,z:o-.19,w:.3,h:.08,d:.03,color:2056112});for(const[c,h]of[[-.19,-.19],[.19,-.19],[-.19,.19],[.19,.19]])s.push({x:a+c,y:.21,z:o+h,w:.06,h:.42,d:.06,color:3112928});const l=new Ge(ts([{x:0,y:1.5,z:2.3,w:5.9,h:2.6,d:.04,color:ne}]),Uc());return l.renderOrder=2,ut(ke(s,Jo(),.5),l)}function Zg(){return ut(ke([{x:0,y:.025,z:0,w:.72,h:.05,d:.62,color:12107462},{x:0,y:.47,z:0,w:.46,h:.84,d:.42,color:10134445},{x:0,y:.35,z:.215,w:.3,h:.04,d:.02,color:7305346},{x:0,y:.45,z:.215,w:.3,h:.04,d:.02,color:7305346},{x:0,y:.92,z:0,w:.8,h:.1,d:.6,color:10134445},{x:0,y:.975,z:0,w:.66,h:.01,d:.46,color:7305346},{x:0,y:1.01,z:.27,w:.8,h:.08,d:.06,color:10134445},{x:0,y:1.01,z:-.27,w:.8,h:.08,d:.06,color:10134445},{x:.37,y:1.01,z:0,w:.06,h:.08,d:.48,color:10134445},{x:-.37,y:1.01,z:0,w:.06,h:.08,d:.48,color:10134445},{x:0,y:.985,z:0,w:.08,h:.01,d:.08,color:3817287},{x:.12,y:1.06,z:-.1,w:.06,h:.12,d:.06,color:13160150},{x:.12,y:1.12,z:-.06,w:.06,h:.04,d:.1,color:13160150},{x:0,y:.92,z:.31,w:.14,h:.08,d:.03,color:3112928},{x:0,y:1.2,z:-.22,w:.08,h:.32,d:.08,color:10134445},{x:0,y:1.52,z:-.22,w:.36,h:.36,d:.08,color:3112928},{x:0,y:1.62,z:-.175,w:.04,h:.05,d:.01,color:ne},{x:0,y:1.565,z:-.175,w:.09,h:.06,d:.01,color:ne},{x:0,y:1.495,z:-.175,w:.15,h:.09,d:.01,color:ne},{x:0,y:1.43,z:-.175,w:.1,h:.04,d:.01,color:ne}]))}function Jg(){if(!Bs){const i=At(["OOOOOOOOOOOOOOOO","OYYYYYYYYYYYYYYO","OYdYYYYYYYYYYdYO","OYYYYWWWWWWYYYYO","OYYYWWWWWWWWYYYO","OYYYWWddddWWdYYO","OYYYYddYYYWWdYYO","OYYYYYYYYWWWdYYO","OYYYYYYYWWWddYYO","OYYYYYYWWWddYYYO","OYYYYYYWWdYYYYYO","OYYYYYYYddYYYYYO","OYYYYYYWWYYYYYYO","OYYYYYYWWdYYYYYO","OYdYYYYYddYYYdYO","OOOOOOOOOOOOOOOO"],{O:"#9a5a10",Y:"#ffc21a",d:"#c87a10",W:"#ffffff"});Bs=new ei({map:i,emissive:16777215,emissiveMap:i,emissiveIntensity:.35})}return ut(new Ge(new Mt(.9,.9,.9),Bs))}function Qg(){const t=[{x:0,y:1.15,z:0,w:1.2,h:2.3,d:.85,color:14165551},{x:-.12,y:1.45,z:.43,w:.82,h:1.25,d:.02,color:15660799},{x:0,y:2.18,z:.43,w:1,h:.2,d:.03,color:ne},{x:0,y:2.18,z:.45,w:.1,h:.12,d:.02,color:3112928},{x:.44,y:1.55,z:.43,w:.18,h:.28,d:.03,color:2764083},{x:.44,y:1.6,z:.45,w:.12,h:.08,d:.02,color:4063098},{x:.44,y:1.25,z:.44,w:.06,h:.16,d:.03,color:13160150},{x:.44,y:1,z:.44,w:.16,h:.12,d:.03,color:13160150},{x:0,y:.32,z:.43,w:.86,h:.26,d:.04,color:2764083},{x:0,y:.4,z:.455,w:.8,h:.06,d:.02,color:5264476},{x:-.5,y:.02,z:0,w:.12,h:.04,d:.8,color:2764083},{x:.5,y:.02,z:0,w:.12,h:.04,d:.8,color:2764083}],n=[3112928,4177754,16751165,16777215,16740264];for(let r=0;r<3;r++){const s=1+r*.4;t.push({x:-.12,y:s-.12,z:.42,w:.8,h:.03,d:.1,color:12174028});for(let a=0;a<5;a++){const o=-.44+a*.16,l=n[(a+r*2)%n.length];t.push({x:o,y:s,z:.42,w:.1,h:.2,d:.08,color:12576511},{x:o,y:s+.12,z:.42,w:.06,h:.05,d:.06,color:l})}}return ut(ke(t))}function e_(i){let e=i|0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const t_=(i,e,t)=>e+(t-e)*i();class n_{constructor(e){this.yaw=0,this.pitch=.82,this.dist=30,this.stick={x:0,z:0,mag:0},this.runOn=!1,this.jumpQueued=!1,this.keys=new Set,this.pointers=new Map,this.pinch=0,e.addEventListener("pointerdown",n=>{this.pointers.set(n.pointerId,{x:n.clientX,y:n.clientY});try{e.setPointerCapture(n.pointerId)}catch{}this.pointers.size===2&&(this.pinch=this.spread())}),e.addEventListener("pointermove",n=>{const r=this.pointers.get(n.pointerId);if(r&&(this.pointers.size===1&&(this.yaw-=(n.clientX-r.x)*.008,this.pitch=Gs(this.pitch+(n.clientY-r.y)*.005,.3,1.4)),r.x=n.clientX,r.y=n.clientY,this.pointers.size===2)){const s=this.spread();this.pinch>0&&(this.dist=Gs(this.dist*(this.pinch/s),12,110)),this.pinch=s}});const t=n=>{this.pointers.delete(n.pointerId),this.pinch=0};e.addEventListener("pointerup",t),e.addEventListener("pointercancel",t),e.addEventListener("wheel",n=>{n.preventDefault(),this.dist=Gs(this.dist*(1+n.deltaY*.001),12,110)},{passive:!1}),window.addEventListener("keydown",n=>{const r=n.key.toLowerCase();r===" "&&!this.keys.has(" ")&&(this.jumpQueued=!0),this.keys.add(r)}),window.addEventListener("keyup",n=>this.keys.delete(n.key.toLowerCase())),window.addEventListener("blur",()=>{this.keys.clear(),this.pointers.clear()})}spread(){const[e,t]=[...this.pointers.values()];return Math.hypot(e.x-t.x,e.y-t.y)||1}jump(){this.jumpQueued=!0}takeJump(){const e=this.jumpQueued;return this.jumpQueued=!1,e}get running(){return this.runOn||this.keys.has("shift")}update(e){this.keys.has("q")&&(this.yaw+=e*1.8),this.keys.has("e")&&(this.yaw-=e*1.8)}move(){let e=0,t=0;(this.keys.has("arrowleft")||this.keys.has("a"))&&(e-=1),(this.keys.has("arrowright")||this.keys.has("d"))&&(e+=1),(this.keys.has("arrowup")||this.keys.has("w"))&&(t-=1),(this.keys.has("arrowdown")||this.keys.has("s"))&&(t+=1);let n=0;if(e!==0||t!==0){const a=Math.hypot(e,t);e/=a,t/=a,n=1}else this.stick.mag>0&&(e=this.stick.x,t=this.stick.z,n=this.stick.mag);const r=Math.cos(this.yaw),s=Math.sin(this.yaw);return{x:e*r+t*s,z:-e*s+t*r,mag:n}}}function Gs(i,e,t){return Math.max(e,Math.min(t,i))}const xg={subtitle:"Singapore City",place:"Marina Bay, Singapore",play:"Play",whoGoes:"Who will go?",whoHint:"Tap one friend, or more to go together",go:"Let's go!",missionTitle:"Mission 1: Clean streets, clean buses",missionText:"Pick up 10 pieces of litter, put them in the RVM to get $1, then change a smoky bus into an electric bus at the charger. Change all 4 buses to finish!",picker:"Litter picker",air:"Air",psiGood:"Good",psiOk:"Okay",psiBad:"Smoky",psiDanger:"Hazardous",hazeThick:"The smoke is so thick you can hardly see! 🌫️ Put out the Sumatra fire to clear it. Tap the 🚁 button at the top",bagFull:"Your bag is full! Take it to a recycling corner ♻️",recycleTitle:"Recycling corner",binMachine:"Bottles and cans go in the RVM (Reverse Vending Machine): 10¢ back each!",binBlue:"Clean paper and boxes go in the blue bin.",busFund:"Bus money",terminal:"Electric bus station",changeBus:"⚡ Make this bus electric! ($1)",terminalHow:"A smoky bus is waiting at the charger. Pay $1 and it gets a big battery and a plug: no more smoke!",questTitle:"Electric buses",stepPick:"Pick up litter",stepRecycle:"Take it to the RVM",stepCharge:"Change a bus at the charger",run:"Run",jump:"Jump",playAgain:"Play from the start",needMore:"Bring {n} more pieces",busChanged:"A smoky bus is now electric! The air got cleaner.",goTerminal:"You have $1! Go to the electric bus station ⚡",busFact:"Old diesel buses puff out smoke that makes the air dirty. Electric buses run on batteries and make no smoke at all!",allDone:"All the buses are electric!",allDoneSub:"Marina Bay's air is fresh and clean. Thank you!",nextChapter:"Next: the haze... coming soon",keepPlaying:"Keep playing",switchHint:"Tap a face to switch",ocean:"To the sea",menu:"Menu",credit:"Map data © OpenStreetMap contributors",lm_merlion:"Merlion",lm_mbs:"Marina Bay Sands",lm_artscience:"ArtScience Museum",lm_esplanade:"Esplanade",lm_flyer:"Singapore Flyer",lm_supertrees:"Supertree Grove",lm_domes:"Flower Dome & Cloud Forest",lm_fullerton:"The Fullerton",lm_raffles:"Raffles Place",lm_chinatown:"Chinatown",lm_clarkequay:"Clarke Quay",lm_boatquay:"Boat Quay",lm_fortcanning:"Fort Canning Park",lm_maxwell:"Maxwell Food Centre",lm_buddhatooth:"Buddha Tooth Relic Temple",lm_mariamman:"Sri Mariamman Temple",area_marina:"📍 Marina Bay",area_cbd:"📍 Raffles Place",area_river:"📍 Singapore River",area_chinatown:"📍 Chinatown",area_fortcanning:"📍 Fort Canning",questRiver:"River clean-up",stepBoat:"Get on the boat at the jetty",stepScoop:"Scoop litter out of the river",stepBack:"Back to the jetty",riverTitle:"Mission: Clean the Singapore River",riverText:"Take the bumboat from the Clarke Quay jetty and scoop up the 10 pieces of litter floating on the river. Water monitor lizards live on the banks: keep away from them!",riverDone:"The Singapore River is clean!",riverFact:"The Singapore River used to be very dirty. From 1977, the whole country cleaned it for ten years, and now it is clean. Boats still scoop out litter every day.",boatOn:"🚤 All aboard! Steer next to the litter to scoop it up",boatOff:"Back on land!",riverAllScooped:"All scooped up! Take the boat back to the jetty",questChinatown:"No more mozzies",stepPots:"Tip out standing water",stepTrays:"Return the trays",ctTitle:"Mission: No more mozzies in Chinatown",ctText:"Rain water in flower pot plates, buckets and old tyres is where mosquitoes lay eggs. Walk up to each one to tip it out. While any water is left, a mosquito swarm follows you! Then take the trays back at Maxwell Food Centre.",potTipped:"Water tipped out! No place for mosquito eggs 💪",potsAllDone:"The mosquitoes are gone! Now return the trays at Maxwell Food Centre",trayGot:"Got a tray! Take it to the tray return",trayReturned:"Trays returned! The next people get a clean table",ctDone:"Chinatown mission done!",ctFact:"In Singapore, everyone takes their own tray and dishes back after eating at a hawker centre, so the next people get a clean table.",potsRefilled:"🌧️ The rain filled some pots in Chinatown again. Mosquitoes love that!",lizardWarn:"🦎 A water monitor lizard is coming! Walk away from it",lizardBump:"🦎 The lizard got a fright! Go round it, far away",bite:"🦟 Oops, a little bite! Tip out the water and the mosquitoes fly home",stormWarn:"⛈️ Thunderstorm! Run under a bus stop roof!",stormSafe:"☂️ Safe under the roof! Wait for the rain to stop",stormStrike:"⚡ BOOM! That was close. Next time, get under a roof faster!",stormEnd:"☀️ The rain stopped... and washed the dust out of the air! PSI went down 🌈",safetyBook:"Safety cards",gotIt:"Got it!",backFromFire:"🚁 The fires are out! The wind brought clean air back to Singapore",shopTitle:"Mama shop",shopHello:'"Welcome! In haze season you need an N95 mask, and on hot days lots of water. What would you like?"',mineTitle:"My things",tab_mask:"Masks",tab_hat:"Hats",tab_glasses:"Glasses",tab_clothes:"Clothes",tab_shoes:"Shoes",tab_ride:"Rides",tab_tool:"Tools",tab_water:"Water",tab_pet:"Pets",tab_fire:"Fire kit",notEnough:"Not enough coins yet: clean up and recycle to earn more!",putOn:"Put on",takeOff:"Take off",bringAlong:"Take along",leaveHome:"Leave at home",rideOn:"Ride it",getOff:"Walk instead",boughtRide:"Bought it! Tap the Ride button to get on.",haveIt:"Got it ✓",gearUse:"Use it",gearRest:"Put away",mineBtn:"My things",mapTitle:"City map",closetDone:"Done ✓",getOnRide:"Ride",getOffRide:"Get off",vendTitle:"Drinks machine",vendText:"A cold bottle of water. The empty bottle goes in your bag for the recycling machine.",vendTip:"Drinking fountains 🚰 are free, and better for the planet!",mapShop:"Mama shop",mapClinic:"Clinic",mapVending:"Drinks machine",mapRecycle:"Recycling",mapTerminal:"Bus station",nothingYet:"Nothing here yet. Visit a mama shop 🏪",bought:"Bought it!",thirsty:"Phew, so thirsty! 💧 Find a water fountain (or drink from your tumbler). Singapore's tap water is safe to drink!",drank:"💧 Gulp gulp... ahh! Full of energy again",bottleBag:"💧 Ahh! The empty bottle went in your bag: recycle it at the RVM ♻️",cough:"Cough cough 😷",soaked:"Soaked! 💦 Wet clothes are heavy and slow. A raincoat or an umbrella keeps you dry, or wait under a bus shelter roof.",gotCold:"Achoo! You caught a cold 🤧 Follow the arrow to a clinic.",gotThroat:"Your throat is sore from the haze 😣 Follow the arrow to a clinic. (An N95 mask stops this!)",sneeze:"Achoo! 🤧",throatCough:"Cough cough 😣",clinicSub:"🩺 Neighbourhood clinic",clinic_cold:"You have a cold",clinic_cold1:"On rainy days, take a raincoat or an umbrella.",clinic_cold2:"Wet clothes? Change and dry off quickly.",clinic_cold3:"Drink lots of water and get some rest.",clinic_throat:"Your throat is sore from the haze",clinic_throat1:"When the PSI is over 100, wear an N95 mask outside.",clinic_throat2:"On very hazy days, play indoors more.",clinic_throat3:"Sip warm water often.",clinicSweet:"The doctor gave you a lollipop 🍭",allBetter:"All better! 💪",betterToast:"All better! Raincoat or umbrella in the rain, N95 in the haze.",n95Tip:"The air is smoky! An N95 mask from the mama shop 🏪 keeps the haze out",woof:"🐶 Woof! Something hidden nearby!",egg:"🥚 +1",busRide:"Bus",busTitle:"Neighbourhood bus",busWhere:"Where shall we go?",busStopHint:"🚏 A bus stop! Tap 🚌 to ride to another neighbourhood",busOff:"🚌 Here we are! Thank you, driver!",noBus:"No bus goes there from this stop. Try another stop!",foundTitle:"You found something hidden!",hiddenBook:"Hidden things",safe_monitor:"Water monitor lizard",safe_monitor1:"They live along the Singapore River and in parks, and grow as long as 2 metres.",safe_monitor2:"Don't go close or feed them. A scared lizard can bite or whip its tail.",safe_monitor3:"If one comes near, just walk slowly away.",safe_mosquito:"Aedes mosquito",safe_mosquito1:"This mosquito has white stripes. Its bite can give people dengue fever.",safe_mosquito2:"It lays eggs in still water. Tip out pot plates and buckets every week.",safe_mosquito3:"Outdoors, wear insect repellent and long clothes.",safe_lightning:"Lightning",safe_lightning1:"Singapore has some of the most lightning in the world.",safe_lightning2:"When you hear thunder, go inside a building or under a roof straight away.",safe_lightning3:"Open fields, the water and big trees are the most dangerous places."},yg={shopTitle:"마마숍",shopHello:'"어서 와요! 헤이즈 철엔 N95 마스크, 더운 날엔 물을 많이 마셔야 해요. 뭐가 필요해요?"',mineTitle:"내 물건",tab_mask:"마스크",tab_hat:"모자",tab_glasses:"안경",tab_clothes:"옷",tab_shoes:"신발",tab_ride:"탈것",tab_tool:"도구",tab_water:"물",tab_pet:"펫",tab_fire:"소방 장비",notEnough:"코인이 아직 모자라요. 청소하고 재활용해서 더 모아요!",putOn:"쓰기",takeOff:"벗기",bringAlong:"데려가기",leaveHome:"집에 두기",rideOn:"타기",getOff:"걸어가기",boughtRide:"샀어요! 타기 버튼을 누르면 타요.",haveIt:"있어요 ✓",gearUse:"쓰기",gearRest:"넣어 두기",mineBtn:"내 물건",mapTitle:"도시 지도",closetDone:"다 했어요 ✓",getOnRide:"타기",getOffRide:"내리기",vendTitle:"음료 자판기",vendText:"시원한 물 한 병. 빈 병은 가방에 넣어서 재활용 기계에 넣어요.",vendTip:"식수대 🚰 물은 공짜고, 지구에도 더 좋아요!",mapShop:"마마숍",mapClinic:"클리닉",mapVending:"음료 자판기",mapRecycle:"재활용",mapTerminal:"버스 충전소",nothingYet:"아직 없어요. 마마숍 🏪 에 가 봐요",bought:"샀어요!",thirsty:"휴, 목말라요! 💧 식수대를 찾아요(텀블러가 있으면 텀블러로). 싱가포르 수돗물은 마셔도 안전해요!",drank:"💧 꿀꺽꿀꺽... 아, 시원해! 힘이 다시 났어요",bottleBag:"💧 시원해! 빈 병은 가방에 넣었어요. RVM에서 재활용해요 ♻️",cough:"콜록콜록 😷",soaked:"옷이 흠뻑 젖었어요 💦 축축해서 느려져요. 우비나 우산이 있으면 안 젖고, 정류장 지붕 밑에서 기다려도 돼요.",gotCold:"에취! 감기에 걸렸어요 🤧 화살표를 따라 동네 클리닉에 가요.",gotThroat:"헤이즈 때문에 목이 아파요 😣 화살표를 따라 클리닉에 가요. (N95 마스크를 쓰면 괜찮아요!)",sneeze:"에취! 🤧",throatCough:"콜록콜록 😣",clinicSub:"🩺 동네 클리닉",clinic_cold:"감기에 걸렸네요",clinic_cold1:"비 오는 날엔 우비나 우산을 챙겨요.",clinic_cold2:"옷이 젖으면 얼른 갈아입고 몸을 말려요.",clinic_cold3:"물을 많이 마시고 푹 쉬어요.",clinic_throat:"헤이즈 때문에 목이 아프네요",clinic_throat1:"PSI가 100이 넘으면 밖에서 N95 마스크를 써요.",clinic_throat2:"연기가 아주 심한 날엔 실내에서 놀아요.",clinic_throat3:"따뜻한 물을 자주 마셔요.",clinicSweet:"선생님이 막대사탕을 줬어요 🍭",allBetter:"다 나았어요! 💪",betterToast:"다 나았어요! 비 올 땐 우비·우산, 헤이즈엔 N95!",n95Tip:"공기가 뿌예요! 마마숍 🏪 의 N95 마스크를 쓰면 헤이즈를 막아 줘요",woof:"🐶 멍멍! 근처에 뭔가 숨어 있어요!",egg:"🥚 +1",busRide:"버스",busTitle:"동네 버스",busWhere:"어디로 갈까요?",busStopHint:"🚏 버스 정류장이에요! 🚌 를 누르면 다른 동네로 가요",busOff:"🚌 도착! 기사님 고맙습니다!",noBus:"이 정류장에서는 거기로 가는 버스가 없어요. 다른 정류장에서 타 봐요!",foundTitle:"숨은 물건을 찾았어요!",hiddenBook:"숨은 물건",subtitle:"싱가포르 도시 탐험",place:"싱가포르 마리나 베이",play:"시작",whoGoes:"누가 갈래?",whoHint:"한 명을 고르거나, 여러 명을 골라 같이 가요",go:"출발!",missionTitle:"미션 1: 깨끗한 거리, 깨끗한 버스",missionText:"쓰레기 10개를 주워 RVM에 넣으면 1달러가 생겨요. 그 돈으로 충전소에서 매연 버스를 전기버스로 바꿔요. 버스 4대를 다 바꾸면 미션 끝!",picker:"청소 집게",air:"공기",psiGood:"좋음",psiOk:"보통",psiBad:"뿌옇다",psiDanger:"위험",hazeThick:"연기 때문에 앞이 안 보여요! 🌫️ 수마트라 불을 꺼야 연기가 걷혀요. 위의 🚁 버튼을 눌러요",bagFull:"가방이 꽉 찼어요! 재활용 코너로 가져가요 ♻️",recycleTitle:"재활용 코너",binMachine:"병과 캔은 RVM(재활용 자판기)에! 하나에 10센트를 돌려줘요.",binBlue:"깨끗한 종이와 상자는 파란 통에!",busFund:"버스 저금통",terminal:"전기버스 충전소",changeBus:"⚡ 이 버스를 전기버스로! (1달러)",terminalHow:"충전기 앞에 매연 버스가 기다리고 있어요. 1달러를 내면 큰 배터리와 충전 플러그를 달아 줘요. 이제 매연이 안 나와요!",questTitle:"전기버스",stepPick:"쓰레기 줍기",stepRecycle:"RVM에 넣기",stepCharge:"충전소에서 버스 바꾸기",run:"달리기",jump:"점프",playAgain:"처음부터 다시",needMore:"쓰레기 {n}개 더 모아요",busChanged:"매연 버스가 전기버스로 바뀌었어요! 공기가 깨끗해졌어요.",goTerminal:"1달러가 모였어요! 전기버스 충전소로 가요 ⚡",busFact:"오래된 디젤 버스는 매연을 뿜어서 공기를 더럽혀요. 전기버스는 배터리로 달려서 매연이 하나도 없어요!",allDone:"버스가 모두 전기버스가 됐어요!",allDoneSub:"마리나 베이의 공기가 맑고 깨끗해졌어요. 고마워요!",nextChapter:"다음 이야기: 뿌연 연무(헤이즈)... 곧 열려요",keepPlaying:"계속 놀기",switchHint:"얼굴을 누르면 바꿔요",ocean:"바다로",menu:"메뉴",credit:"지도 데이터 © OpenStreetMap 기여자",lm_merlion:"머라이언",lm_mbs:"마리나 베이 샌즈",lm_artscience:"아트사이언스 뮤지엄",lm_esplanade:"에스플러네이드",lm_flyer:"싱가포르 플라이어",lm_supertrees:"슈퍼트리 그로브",lm_domes:"플라워 돔 · 클라우드 포레스트",lm_fullerton:"풀러턴 호텔",lm_raffles:"래플스 플레이스",lm_chinatown:"차이나타운",lm_clarkequay:"클락 키",lm_boatquay:"보트 키",lm_fortcanning:"포트 캐닝 공원",lm_maxwell:"맥스웰 푸드 센터",lm_buddhatooth:"불아사 (부처님 치아 사원)",lm_mariamman:"스리 마리암만 사원",area_marina:"📍 마리나 베이",area_cbd:"📍 래플스 플레이스",area_river:"📍 싱가포르 강",area_chinatown:"📍 차이나타운",area_fortcanning:"📍 포트 캐닝",questRiver:"강 청소 보트",stepBoat:"선착장에서 보트 타기",stepScoop:"강 쓰레기 건지기",stepBack:"선착장으로 돌아오기",riverTitle:"미션: 싱가포르 강 청소",riverText:"클락 키 선착장에서 범보트를 타고 강에 떠다니는 쓰레기 10개를 건져요. 강가에는 물왕도마뱀이 살아요. 가까이 가지 말고 멀리 돌아가요!",riverDone:"싱가포르 강이 깨끗해졌어요!",riverFact:"싱가포르 강은 옛날에 아주 더러웠어요. 1977년부터 10년 동안 온 나라가 함께 청소해서 지금처럼 깨끗해졌어요. 지금도 청소 보트가 매일 쓰레기를 건져요.",boatOn:"🚤 보트 출발! 쓰레기 옆으로 지나가면 건져져요",boatOff:"보트에서 내렸어요!",riverAllScooped:"다 건졌어요! 보트를 선착장으로 돌려보내요",questChinatown:"모기 없는 차이나타운",stepPots:"고인 물 버리기",stepTrays:"쟁반 반납하기",ctTitle:"미션: 모기 없는 차이나타운",ctText:"화분 받침, 양동이, 헌 타이어에 고인 빗물에 모기가 알을 낳아요. 하나씩 걸어가서 물을 쏟아 버려요. 물이 남아 있는 동안은 모기떼가 따라와요! 그다음 맥스웰 호커센터에서 쟁반을 반납해요.",potTipped:"물을 버렸어요! 모기가 알을 낳을 곳이 없어졌어요 💪",potsAllDone:"모기가 사라졌어요! 이제 맥스웰 호커센터에서 쟁반을 반납해요",trayGot:"쟁반을 들었어요! 쟁반 반납대로 가요",trayReturned:"쟁반 반납 완료! 다음 사람이 깨끗한 자리에 앉을 수 있어요",ctDone:"차이나타운 미션 완료!",ctFact:"싱가포르에서는 호커센터에서 다 먹은 쟁반과 그릇을 각자 반납해요. 다음 사람이 깨끗한 자리에 앉을 수 있게요.",potsRefilled:"🌧️ 비가 와서 차이나타운 화분에 물이 다시 고였어요. 모기가 좋아해요!",lizardWarn:"🦎 물왕도마뱀이 다가와요! 걸어서 멀어져요",lizardBump:"🦎 도마뱀이 깜짝 놀랐어요! 멀리 돌아가요",bite:"🦟 앗, 모기가 콕! 고인 물을 버리면 모기가 집에 가요",stormWarn:"⛈️ 소나기와 번개! 버스 정류장 지붕 밑으로 달려요!",stormSafe:"☂️ 지붕 밑이라 안전해요! 비가 그칠 때까지 기다려요",stormStrike:"⚡ 쾅! 깜짝 놀랐죠? 다음엔 더 빨리 지붕 밑으로!",stormEnd:"☀️ 비가 그쳤어요. 비가 공기 속 먼지를 씻어 내려서 PSI가 내려갔어요 🌈",safetyBook:"안전 카드",gotIt:"알겠어요!",backFromFire:"🚁 산불을 껐어요! 바람이 맑은 공기를 싱가포르로 데려왔어요",safe_monitor:"물왕도마뱀",safe_monitor1:"싱가포르 강가와 공원에 살아요. 길이가 2미터까지 자라요.",safe_monitor2:"가까이 가거나 먹이를 주지 말아요. 놀라면 물거나 꼬리로 칠 수 있어요.",safe_monitor3:"가까이 오면 천천히 걸어서 멀어지면 돼요.",safe_mosquito:"이집트숲모기 (뎅기 모기)",safe_mosquito1:"흰 줄무늬가 있는 모기예요. 물리면 뎅기열에 걸릴 수 있어요.",safe_mosquito2:"고인 물에 알을 낳아요. 일주일에 한 번 화분 받침과 양동이 물을 버려요.",safe_mosquito3:"밖에서는 모기 기피제를 바르고 긴 옷을 입어요.",safe_lightning:"번개",safe_lightning1:"싱가포르는 세계에서 번개가 아주 많이 치는 나라예요.",safe_lightning2:"천둥 소리가 들리면 바로 건물 안이나 지붕 밑으로 가요.",safe_lightning3:"넓은 운동장, 물가, 큰 나무 밑이 가장 위험해요."};function jc(i){return(ns()==="ko"?yg:xg)[i]}function Or(i,e,t){const n=document.createElement(i);return e&&(n.className=e),n.dataset.city=t,n.textContent=jc(t),n}function i_(){document.querySelectorAll("[data-city]").forEach(i=>i.textContent=jc(i.dataset.city))}const vg=4,r_=100,s_=10,o_={buses:0,cents:0,team:[]};function Sg(i){return Math.round(96-i/vg*58)}function a_(i,e,t){const n=Sg(i),r=n+((180-n)*Math.min(1,e)+120*Math.max(0,e-1))*(1-t*.7);return Math.max(15,Math.round(r-35*t))}const Ll="city-wear",wg={kick:.28,scooter:.28,skateboard:.17,bike:.26,fireTruck:.37},Il={kick:()=>Qo(),scooter:Wc,skateboard:Yc,bike:Xc,fireTruck:qc};function Mg(i,e){const t=i.part("head"),n=i.part("body");for(const c of[t,n,i.root,...i.feet])for(const h of[...c.children])h.userData[Ll]&&c.remove(h);const r=c=>(c.userData[Ll]=!0,c);let s=null,a=null;if(e.mask&&t.add(r(zc(e.mask))),e.glasses&&t.add(r(Nc(e.glasses))),e.hat){const c=r(kc(e.hat));t.add(c),s=c.getObjectByName("fan")??null}if(e.clothes){const c=Fc(e.clothes);n.add(r(c.body)),c.head&&!e.hat&&t.add(r(c.head))}if(e.shoes)for(const c of i.feet)c.add(r(Oc(e.shoes)));if(e.buddy){const c=r(Kc());c.position.set(.42,.45,-.05),c.rotation.y=.25,n.add(c)}if(e.tumbler){const c=r(Bc());c.position.set(.52,-.5,-.28),n.add(c)}if(e.bowl){const c=Hc();r(c.root).position.set(0,-.1,.55),n.add(c.root),a=c.fish}let o=null;if(e.umbrella){o=r(e.umbrella==="big"?Gc():Vc());const c={fanhat:.35,durian:.6,sunhat:.2,chef:.55,beanie:.3,crown:.1};o.position.set(-.62,.3+(e.hat?c[e.hat]??0:0),.12),o.visible=!1,i.root.add(o)}let l=null;if(e.ride&&Il[e.ride]){l=r(Il[e.ride]());const c={bike:.42,fireTruck:0,kick:.05,scooter:.05};l.position.set(0,-(.9+wg[e.ride])/.85,c[e.ride]??.15),l.visible=!1,i.root.add(l)}return{fan:s,fish:a,umbrella:o,ride:l}}function l_(){const i=new Pe,e=(t,n,r,s)=>{const a=new Sn({color:r,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.95}),o=[[.9,-.7,1.8],[2.8,.45,.5],[2.1,.9,.4],[1.4,1.3,.4],[.7,1.68,.36]];for(const[l,c,h]of o){const d=new Ge(new Mt(l+t*2,.12,h+t*2),a);d.position.set(0,n,c),d.renderOrder=s,i.add(d)}};return e(.18,0,16777215,20),e(0,.06,16762394,21),i}function c_(i,e,t,n,r,s){const a=s+Math.sin(performance.now()/180)*.35;i.position.set(e+Math.sin(r)*a,t,n+Math.cos(r)*a),i.rotation.y=r}const $c={n95:{tab:"mask",price:10,icon:"😷",slot:"mask",name:{en:"N95 mask",ko:"N95 마스크"},does:{en:"Keeps out haze smoke. Wear it when the PSI is over 100!",ko:"헤이즈 연기를 막아 줘요. PSI가 100이 넘으면 꼭 써요!"}},maskPink:{tab:"mask",price:5,icon:"🩷",slot:"mask",name:{en:"Pink dotty mask",ko:"분홍 물방울 마스크"},does:{en:"Pretty! But cloth masks do not stop haze smoke.",ko:"예뻐요! 하지만 천 마스크는 헤이즈 연기를 못 막아요."}},maskBlue:{tab:"mask",price:5,icon:"🩵",slot:"mask",name:{en:"Blue mask",ko:"파란 마스크"},does:{en:"Good for coughs and colds, but not strong enough for haze.",ko:"감기에는 좋지만 헤이즈에는 약해요."}},maskStar:{tab:"mask",price:5,icon:"⭐",slot:"mask",name:{en:"Star mask",ko:"별 마스크"},does:{en:"Sparkly! For haze, wear the N95.",ko:"반짝반짝! 헤이즈 때는 N95를 써요."}},n95Pink:{tab:"mask",price:12,icon:"😷",slot:"mask",name:{en:"Pink N95 mask",ko:"분홍 N95 마스크"},does:{en:"A real N95 in pink: keeps out haze smoke.",ko:"분홍색 진짜 N95: 헤이즈 연기를 막아 줘요."}},n95Purple:{tab:"mask",price:12,icon:"😷",slot:"mask",name:{en:"Purple N95 mask",ko:"보라 N95 마스크"},does:{en:"A real N95 in purple: keeps out haze smoke.",ko:"보라색 진짜 N95: 헤이즈 연기를 막아 줘요."}},n95Mint:{tab:"mask",price:12,icon:"😷",slot:"mask",name:{en:"Mint N95 mask",ko:"민트 N95 마스크"},does:{en:"A real N95 in mint green: keeps out haze smoke.",ko:"민트색 진짜 N95: 헤이즈 연기를 막아 줘요."}},n95Yellow:{tab:"mask",price:12,icon:"😷",slot:"mask",name:{en:"Yellow N95 mask",ko:"노랑 N95 마스크"},does:{en:"A real N95 in sunny yellow: keeps out haze smoke.",ko:"노란색 진짜 N95: 헤이즈 연기를 막아 줘요."}},n95Black:{tab:"mask",price:12,icon:"😷",slot:"mask",name:{en:"Black N95 mask",ko:"검정 N95 마스크"},does:{en:"A real N95 in cool black: keeps out haze smoke.",ko:"멋진 검정 진짜 N95: 헤이즈 연기를 막아 줘요."}},maskRainbow:{tab:"mask",price:5,icon:"🌈",slot:"mask",name:{en:"Rainbow mask",ko:"무지개 마스크"},does:{en:"All the colours! For haze, wear an N95.",ko:"알록달록! 헤이즈 때는 N95를 써요."}},maskFlower:{tab:"mask",price:5,icon:"🌸",slot:"mask",name:{en:"Flower mask",ko:"꽃 마스크"},does:{en:"Little flowers all over. For haze, wear an N95.",ko:"작은 꽃이 가득. 헤이즈 때는 N95를 써요."}},maskCat:{tab:"mask",price:5,icon:"🐱",slot:"mask",name:{en:"Kitty mask",ko:"고양이 마스크"},does:{en:"Whiskers and a pink nose. Meow! For haze, wear an N95.",ko:"수염과 분홍 코. 야옹! 헤이즈 때는 N95를 써요."}},cap:{tab:"hat",price:12,icon:"🧢",slot:"hat",name:{en:"Red cap",ko:"빨간 모자"},does:{en:"Keeps the hot sun off your face.",ko:"뜨거운 햇볕을 가려 줘요."}},sunhat:{tab:"hat",price:12,icon:"👒",slot:"hat",name:{en:"Straw sun hat",ko:"밀짚 모자"},does:{en:"A big brim for big sunshine.",ko:"챙이 넓어서 햇볕을 많이 가려요."}},bucket:{tab:"hat",price:12,icon:"🪣",slot:"hat",name:{en:"Bucket hat",ko:"벙거지 모자"},does:{en:"A cool green hat.",ko:"멋진 초록 모자예요."}},durian:{tab:"hat",price:20,icon:"🌵",slot:"hat",name:{en:"Durian hat",ko:"두리안 모자"},does:{en:"The king of fruits... on your head! Spiky and silly.",ko:"과일의 왕이 머리 위에! 뾰족뾰족 웃겨요."}},crown:{tab:"hat",price:25,icon:"👑",slot:"hat",name:{en:"Gold crown",ko:"금 왕관"},does:{en:"For the queen or king of clean streets!",ko:"깨끗한 거리의 여왕님, 왕님께!"}},beanie:{tab:"hat",price:10,icon:"🧶",slot:"hat",name:{en:"Woolly beanie",ko:"털실 비니"},does:{en:"Cosy and soft, with a pompom on top.",ko:"포근포근, 꼭대기에 방울이 달렸어요."}},chef:{tab:"hat",price:12,icon:"👨‍🍳",slot:"hat",name:{en:"Chef hat",ko:"요리사 모자"},does:{en:"Tall and white, like the hawker centre cooks.",ko:"호커센터 요리사처럼 하얗고 높아요."}},sunglasses:{tab:"glasses",price:8,icon:"🕶️",slot:"glasses",name:{en:"Sunglasses",ko:"선글라스"},does:{en:"Cool! Keeps the bright sun out of your eyes.",ko:"멋져요! 눈부신 햇빛을 막아 줘요."}},heartGlasses:{tab:"glasses",price:10,icon:"💗",slot:"glasses",name:{en:"Heart glasses",ko:"하트 안경"},does:{en:"Pink hearts for eyes!",ko:"눈에 분홍 하트가 쏙!"}},starGlasses:{tab:"glasses",price:10,icon:"🌟",slot:"glasses",name:{en:"Star glasses",ko:"별 안경"},does:{en:"Party star glasses, sparkly yellow.",ko:"반짝반짝 노란 별 파티 안경."}},sgTee:{tab:"clothes",price:12,icon:"👕",slot:"outfit",name:{en:"Singapore T-shirt",ko:"싱가포르 티셔츠"},does:{en:"Red and white with the moon and five stars, like the flag.",ko:"국기처럼 빨강·하양에 달과 별 다섯 개."}},flowerDress:{tab:"clothes",price:18,icon:"👗",slot:"outfit",name:{en:"Flower dress",ko:"꽃 드레스"},does:{en:"A twirly pink dress with little flowers.",ko:"작은 꽃이 달린 분홍 빙글빙글 드레스."}},raincoat:{tab:"clothes",price:15,icon:"🧥",slot:"outfit",name:{en:"Raincoat",ko:"우비"},does:{en:"Yellow raincoat with a hood: you stay dry in the rain!",ko:"모자 달린 노란 우비: 비가 와도 안 젖어요!"}},football:{tab:"clothes",price:15,icon:"⚽",slot:"outfit",name:{en:"Football kit",ko:"축구 유니폼"},does:{en:"Number 10, ready to kick off!",ko:"등번호 10번, 출발 준비 완료!"}},rainboots:{tab:"shoes",price:12,icon:"🥾",slot:"shoes",name:{en:"Rain boots",ko:"장화"},does:{en:"Splash in puddles: your feet stay dry and you get wet slower.",ko:"물웅덩이도 첨벙첨벙: 발이 안 젖어서 덜 젖어요."}},sparkle:{tab:"shoes",price:15,icon:"✨",slot:"shoes",name:{en:"Sparkly shoes",ko:"반짝이 신발"},does:{en:"Glittery shoes for a party.",ko:"파티에 신는 반짝반짝 신발."}},sandals:{tab:"shoes",price:8,icon:"🩴",slot:"shoes",name:{en:"Sandals",ko:"샌들"},does:{en:"Cool feet on a hot day.",ko:"더운 날 발이 시원해요."}},grabber:{tab:"tool",price:25,icon:"🦾",name:{en:"Long grabber",ko:"긴 집게"},does:{en:"Reaches litter from further away.",ko:"더 멀리 있는 쓰레기도 집어요."}},bigbag:{tab:"tool",price:30,icon:"🎒",name:{en:"Big bag",ko:"큰 가방"},does:{en:"Holds 15 pieces instead of 10.",ko:"쓰레기를 10개 대신 15개 담아요."}},sneakers:{tab:"tool",price:25,icon:"👟",name:{en:"Running shoes",ko:"운동화"},does:{en:"Run faster and get less thirsty.",ko:"더 빨리 달리고 덜 목말라요."}},brolly:{tab:"tool",price:10,icon:"🌂",name:{en:"Umbrella",ko:"우산"},does:{en:"Opens by itself in the rain so you stay dry. (In a thunderstorm, still run to a shelter!)",ko:"비가 오면 저절로 펴져서 안 젖어요. (천둥번개 칠 땐 그래도 정류장으로!)"}},kick:{tab:"ride",price:25,icon:"🛴",ride:1.3,name:{en:"Kick scooter",ko:"킥보드"},does:{en:"Push and glide! Tap the Ride button to get on.",ko:"밀고 쓩! 타기 버튼을 누르면 타요."}},skateboard:{tab:"ride",price:30,icon:"🛹",ride:1.35,name:{en:"Skateboard",ko:"스케이트보드"},does:{en:"Roll along the park paths. Tap the Ride button to get on.",ko:"공원 길을 데굴데굴. 타기 버튼을 누르면 타요."}},bike:{tab:"ride",price:45,icon:"🚲",ride:1.5,name:{en:"Bicycle",ko:"자전거"},does:{en:"The fastest in the shop, and pedalling makes you less thirsty than running.",ko:"가게에서 제일 빨라요. 달리는 것보다 덜 목말라요."}},tumbler:{tab:"water",price:10,icon:"🥤",name:{en:"Tumbler",ko:"텀블러"},does:{en:"Carry 3 drinks with you. Fill it up free at any water fountain: no plastic!",ko:"물을 3번 마실 만큼 들고 다녀요. 식수대에서 공짜로 채워요. 플라스틱이 안 생겨요!"}},bottle:{tab:"water",price:2,icon:"🧴",once:!0,name:{en:"Bottle of water",ko:"생수 한 병"},does:{en:"A big drink now... and a plastic bottle for your bag.",ko:"지금 바로 물을 마셔요. 대신 플라스틱 병이 하나 생겨요."}},dog:{tab:"pet",price:40,icon:"🐶",pet:!0,name:{en:"Puppy",ko:"강아지"},does:{en:"Sniffs out hidden things nearby and barks.",ko:"근처에 숨은 물건을 냄새로 찾아 짖어요."}},cat:{tab:"pet",price:40,icon:"🐱",pet:!0,name:{en:"Kitty",ko:"고양이"},does:{en:"Monitor lizards keep away from a brave cat.",ko:"용감한 고양이가 있으면 왕도마뱀이 다가오지 않아요."}},bird:{tab:"pet",price:40,icon:"🦜",pet:!0,name:{en:"Parrot",ko:"앵무새"},does:{en:"Flies down and picks up litter for you now and then.",ko:"가끔 날아가서 쓰레기를 대신 주워 와요."}},chicken:{tab:"pet",price:30,icon:"🐔",pet:!0,name:{en:"Kampong chicken",ko:"캄퐁 닭"},does:{en:"Lays a lucky egg now and then: +1 coin!",ko:"가끔 행운의 달걀을 낳아요. 코인 +1!"}},goldfish:{tab:"pet",price:8,icon:"🐠",pet:!0,name:{en:"Goldfish in a bowl",ko:"어항 속 금붕어"},does:{en:"You carry the bowl in your arms. Running is slow and sloshy... but she's so cute!",ko:"어항을 품에 안고 다녀요. 출렁출렁 달리기가 느려져요. 그래도 귀여워요!"}},bigBucket:{tab:"fire",price:50,icon:"🌊",name:{en:"Big water bucket",ko:"큰 물주머니"},does:{en:"The fire helicopter carries 10 drops of water instead of 5.",ko:"소방 헬기가 물을 5번 대신 10번 뿌릴 만큼 퍼 와요."}},turbo:{tab:"fire",price:40,icon:"🚁",name:{en:"Helicopter engine upgrade",ko:"헬기 엔진 업그레이드"},does:{en:"The fire helicopter flies faster and scoops water faster.",ko:"소방 헬기가 더 빨리 날고, 물도 더 빨리 퍼요."}},powerHose:{tab:"fire",price:30,icon:"💦",name:{en:"Power hose",ko:"강력 소방 호스"},does:{en:"A longer fire hose with a stronger spray that reaches further.",ko:"소방 호스가 더 길어지고, 물줄기가 더 멀리 세게 나가요."}},longHose:{tab:"fire",price:35,icon:"➰",name:{en:"Extra-long fire hose",ko:"아주 긴 소방 호스"},does:{en:"On the ground, the hose stretches twice as far from the pump.",ko:"땅에서 소방 호스가 펌프에서 두 배 더 멀리 늘어나요."}},heliHose:{tab:"fire",price:120,icon:"🚿",name:{en:"Helicopter water cannon",ko:"헬기 물대포 호스"},does:{en:"Hold the button and the fire helicopter sprays a long stream of water from the sky. Sweep it over the fires!",ko:"버튼을 꾹 누르면 소방 헬기가 하늘에서 물줄기를 쭉 뿌려요. 불 위로 쓱쓱 지나가며 꺼요!"}},thermal:{tab:"fire",price:25,icon:"📷",name:{en:"Thermal camera",ko:"열화상 카메라"},does:{en:"Fire hiding under the ground shows up as red rings, and on the map too. Real firefighters use one!",ko:"땅속에 숨은 불씨가 빨간 동그라미로 보이고 지도에도 나와요. 진짜 소방관도 써요!"}},fireSuitPro:{tab:"fire",price:60,icon:"🥈",slot:"outfit",name:{en:"Silver heat suit",ko:"은빛 방열 소방복"},does:{en:"Shiny silver so the heat bounces off: on the ground you walk faster and can go closer to the flames. Real firefighters wear one next to big fires!",ko:"반짝이는 은색이라 뜨거운 열을 튕겨 내요. 땅에서 더 빨리 걷고 불 가까이 갈 수 있어요. 진짜 소방관도 큰불 옆에서 입어요!"}},fireSuitHero:{tab:"fire",price:150,icon:"🦸",slot:"outfit",name:{en:"Hero firefighter suit",ko:"영웅 소방복"},does:{en:"Red and gold with a star helmet: on the ground you walk fastest, go closest to the flames, and the hose sprays harder and further.",ko:"빨강과 금색, 별 헬멧. 땅에서 제일 빨리 걷고 불에 제일 가까이 가요. 호스 물줄기도 더 세고 멀리 나가요."}},eagle:{tab:"fire",price:0,icon:"🦅",hidden:!0,name:{en:"Sea eagle",ko:"독수리"},does:{en:"Joins after Sumatra stage 1. Circles over where to go next and spots spreading fires early.",ko:"수마트라 1단계를 끝내면 친구가 돼요. 다음 갈 곳 위를 빙빙 돌고, 번지는 불을 일찍 찾아 줘요."}},elephant:{tab:"fire",price:0,icon:"🐘",hidden:!0,name:{en:"Sumatran elephant",ko:"수마트라코끼리"},does:{en:"Joins after Sumatra stage 2. Walks with you on the ground and sprays hot spots with its trunk.",ko:"수마트라 2단계를 끝내면 친구가 돼요. 땅에서 같이 걸으며 코로 땅속 불씨에 물을 뿜어요."}},hornbill:{tab:"fire",price:0,icon:"🐦",hidden:!0,name:{en:"Rhinoceros hornbill",ko:"코뿔새"},does:{en:"Joins after Sumatra stage 3. Spreads seeds so young trees grow where fires went out: +2 coins for each fire.",ko:"수마트라 3단계를 끝내면 친구가 돼요. 씨앗을 퍼뜨려 불 꺼진 곳에 어린 나무가 자라요. 불을 끌 때마다 코인 +2."}},fireSuit:{tab:"fire",price:0,icon:"🧑‍🚒",slot:"outfit",hidden:!0,name:{en:"Firefighter kit",ko:"소방관 옷"},does:{en:"From Sumatra stage 1: the orange coat with shiny stripes and the yellow helmet. Wear it in the city!",ko:"수마트라 1단계 선물: 반짝이 줄 주황 코트와 노란 헬멧. 도시에서도 입어요!"}},orangutanPlush:{tab:"fire",price:0,icon:"🦧",slot:"buddy",hidden:!0,name:{en:"Baby orangutan plush",ko:"아기 오랑우탄 인형"},does:{en:"A thank-you from the rescue centre (stage 2). It rides on your shoulder. Real orangutans belong in the forest, never as pets.",ko:"구조센터의 고마움 선물(2단계). 어깨에 올라타요. 진짜 오랑우탄은 숲에서 살아야 해요. 애완동물로 키우면 안 돼요."}},fireTruck:{tab:"fire",price:0,icon:"🚒",ride:1.55,hidden:!0,name:{en:"Little fire truck",ko:"작은 소방차"},does:{en:"From Sumatra stage 3: a ride-on fire truck. Tap Ride and everyone drives!",ko:"수마트라 3단계 선물: 타고 다니는 소방차. 타기 버튼을 누르면 다 같이 타요!"}},umbrella:{tab:"tool",price:0,icon:"☂️",hidden:!0,name:{en:"Big umbrella",ko:"큰 우산"},does:{en:"In a thunderstorm, open it and you are safe anywhere.",ko:"천둥번개가 쳐도 우산을 펴면 어디서나 안전해요."}},luckycat:{tab:"tool",price:0,icon:"🐈",hidden:!0,name:{en:"Lucky cat",ko:"행운의 고양이"},does:{en:"Waves its paw: double coins at the recycling corner!",ko:"앞발을 흔들어요. 재활용 코너 코인이 두 배!"}},fanhat:{tab:"hat",price:0,icon:"🌀",slot:"hat",hidden:!0,name:{en:"Fan hat",ko:"선풍기 모자"},does:{en:"A little fan keeps you cool: no thirst while you wear it.",ko:"작은 선풍기가 시원하게 해 줘요. 쓰고 있으면 목마르지 않아요."}},scooter:{tab:"ride",price:0,icon:"⚡",ride:1.6,hidden:!0,name:{en:"Lightning scooter",ko:"번개 킥보드"},does:{en:"Zoom! Faster than anything in the shop.",ko:"쌩쌩! 가게에 있는 무엇보다 빨라요."}},magnet:{tab:"tool",price:0,icon:"🧲",hidden:!0,name:{en:"Litter magnet",ko:"쓰레기 자석"},does:{en:"Pulls in litter from all around you.",ko:"주변 쓰레기를 쓱 끌어당겨요."}}},bg=Object.keys($c);function h_(i){return!!i&&i.startsWith("n95")}function Ai(i){return $c[i]}function Eg(i){const e=Ai(i);return e?e.name[ns()==="ko"?"ko":"en"]:i}function d_(i){const e=Ai(i);return e?e.does[ns()==="ko"?"ko":"en"]:""}function u_(i,e){var t;return!!((t=i.owned)!=null&&t.includes(e))}const f_="🪙",Tg={rows:["............",".......TT...","......TTT...",".....TTT....","W...TTT.....",".W.TTT......","W..TT.......",".W.TT.......","..FFTFF.....",".FF...FF....","FF.....FF...","............"],palette:{T:"#ff5aa5",F:"#ffc21a",W:"#ffffff"}},Vs=.18;function Dl(i,e){try{i.setPointerCapture(e)}catch{}}class p_{constructor(e){this.actions=e,this.stickId=null,this.diveId=null,this.stick=it("div","stick hidden"),this.knob=it("div","stick-knob"),this.stick.append(it("div","stick-ring"),this.knob),this.stick.addEventListener("pointerdown",s=>{this.stickId===null&&(this.stickId=s.pointerId,Dl(this.stick,s.pointerId),this.stick.classList.add("active"),this.moveStick(s))}),this.stick.addEventListener("pointermove",s=>{s.pointerId===this.stickId&&this.moveStick(s)});const t=s=>{s.pointerId===this.stickId&&(this.stickId=null,this.stick.classList.remove("active"),this.knob.style.transform="",this.actions.onStick(0,0,0))};this.stick.addEventListener("pointerup",t),this.stick.addEventListener("pointercancel",t),this.buttons=it("div","pad hidden"),this.flickBtn=it("button","pad-btn pad-flick");const n=document.createElement("img");n.src=Dc("pad-flick",Tg),n.alt="",n.className="pixel-icon pad-flick-img",this.flickBtn.append(n,it("span","pad-label","flick")),this.upBtn=it("button","pad-btn pad-up"),this.upBtn.append(it("span","pad-arrow",void 0,"⬆"),it("span","pad-label","surfaceUp")),this.diveBtn=it("button","pad-btn pad-dive"),this.diveBtn.append(it("span","pad-arrow",void 0,"⬇"),it("span","pad-label","diveDown")),this.buttons.append(this.upBtn,this.diveBtn,this.flickBtn),this.flickBtn.addEventListener("pointerdown",s=>{s.preventDefault(),this.actions.onFlick()}),this.upBtn.addEventListener("pointerdown",s=>{s.preventDefault(),this.actions.onUp()}),this.diveBtn.addEventListener("pointerdown",s=>{s.preventDefault(),this.diveId===null&&(this.diveId=s.pointerId,Dl(this.diveBtn,s.pointerId),this.diveBtn.classList.add("held"),this.actions.onDive(!0))});const r=s=>{s.pointerId===this.diveId&&(this.diveId=null,this.diveBtn.classList.remove("held"),this.actions.onDive(!1))};this.diveBtn.addEventListener("pointerup",r),this.diveBtn.addEventListener("pointercancel",r)}get elements(){return[this.stick,this.buttons]}show(e){for(const t of this.elements)t.classList.toggle("hidden",!e);e||this.reset()}setSurfaced(e){this.upBtn.classList.toggle("off",e),this.diveBtn.classList.toggle("glow",e)}cooldown(e){this.flickBtn.style.setProperty("--cool",`${e}s`),this.flickBtn.classList.remove("cooling"),this.flickBtn.offsetWidth,this.flickBtn.classList.add("cooling")}reset(){this.stickId=null,this.diveId=null,this.knob.style.transform="",this.stick.classList.remove("active"),this.diveBtn.classList.remove("held"),this.actions.onStick(0,0,0)}moveStick(e){const t=this.stick.getBoundingClientRect(),n=t.width/2;let r=(e.clientX-(t.left+n))/n,s=(e.clientY-(t.top+n))/n;const a=Math.hypot(r,s);a>1&&(r/=a,s/=a);const o=Math.min(1,a);if(this.knob.style.transform=`translate(${r*n*.55}px, ${s*n*.55}px)`,o<Vs){this.actions.onStick(0,0,0);return}const l=.45+.55*((o-Vs)/(1-Vs));this.actions.onStick(r/(a||1),s/(a||1),l)}}const Ag=[{tab:"clothes",icon:"👗",key:"tab_clothes"},{tab:"hat",icon:"🧢",key:"tab_hat"},{tab:"glasses",icon:"🕶️",key:"tab_glasses"},{tab:"mask",icon:"😷",key:"tab_mask"},{tab:"shoes",icon:"👟",key:"tab_shoes"},{tab:"ride",icon:"🛴",key:"tab_ride"},{tab:"pet",icon:"🐾",key:"tab_pet"},{tab:"fire",icon:"🚒",key:"tab_fire"}],Zc=i=>i.tab==="fire"&&!i.slot&&!i.pet&&!i.ride,Ul=i=>i.ride?"ride":i.tab,Rg=i=>!!(i.slot||i.pet||i.ride)||Zc(i);class m_{constructor(e,t){this.actions=e,this.picture=t,this.tab="clothes",this.el=it("div","wardrobe city-closet hidden");const n=it("div","wardrobe-panel"),r=it("div","wardrobe-head"),s=it("h2");s.append(it("span","",void 0,"🎒 "),Or("span","","mineTitle")),this.whoRow=it("div","wardrobe-who"),r.append(s,this.whoRow),this.tabRow=it("div","wardrobe-tabs city-closet-tabs"),this.grid=it("div","wardrobe-grid city-closet-grid");const a=Or("button","big-btn play","closetDone");a.addEventListener("click",()=>this.actions.onClose()),n.append(r,this.tabRow,this.grid,a),this.el.append(n)}get isOpen(){return!this.el.classList.contains("hidden")}open(e,t){t&&(this.tab=t),this.el.classList.remove("hidden"),this.update(e)}update(e){this.view=e,this.render()}close(){this.el.classList.add("hidden")}render(){var s,a;const e=this.view;this.whoRow.replaceChildren();for(const o of Tc){if(!e.team.includes(o))continue;const l=it("button",`pill who-${o}${o===e.who?" selected":""}`);l.append(Zm(o,e.styles[o],"who-face"),it("span","",o)),l.addEventListener("click",()=>this.actions.onWho(o)),this.whoRow.append(l)}const t=bg.filter(o=>{const l=Ai(o);return e.owned.includes(o)&&!l.once&&Rg(l)}),n=Ag.filter(o=>t.some(l=>Ul(Ai(l))===o.tab));n.some(o=>o.tab===this.tab)||(this.tab=((s=n[0])==null?void 0:s.tab)??"clothes"),this.tabRow.replaceChildren();for(const o of n){const l=it("button",`wardrobe-tab${o.tab===this.tab?" selected":""}`);l.append(it("span","tab-icon",void 0,o.icon),Or("span","tab-label",o.key)),l.addEventListener("click",()=>{this.tab=o.tab,this.render()}),this.tabRow.append(l)}const r=e.worn(e.who);this.grid.replaceChildren();for(const o of t){const l=Ai(o);if(Ul(l)!==this.tab)continue;const c=r.includes(o)||e.pet===o||e.ride===o||Zc(l)&&!((a=e.off)!=null&&a.includes(o)),h=it("button",`choice${c?" wearing":""}`),d=this.picture(o);if(d){const u=document.createElement("img");u.src=d,u.alt="",u.draggable=!1,u.className="swatch-img city-closet-pic",h.append(u)}else h.append(it("div","swatch swatch-emoji",void 0,l.icon));h.append(it("div","choice-name",void 0,Eg(o))),c&&h.append(it("span","choice-tag",void 0,"✓")),h.addEventListener("click",()=>this.actions.onToggle(e.who,o)),this.grid.append(h)}this.grid.children.length||this.grid.append(Or("div","city-card-sub","nothingYet"))}}const Cg=i=>de(i,"plain");function Xe(i,e,t,n,r,s,a,o,l=0){const c=new Ge(ar(e,t,n,.5),Cg(r));return c.position.set(s,a,o),c.rotation.z=l,i.add(c),c}const Pg=15759902,Hr=15909424,Ws=14262842,zl=10134445,Ln=2763306,Ys=6273264,Br=14164010,Nl=16053492;function Lg(i){const e=new Pe;switch(i){case"bigBucket":{Xe(e,1.6,1.3,1.6,Pg,0,0,0),Xe(e,1.7,.16,1.7,13130256,0,.6,0),Xe(e,1.4,.1,1.4,Ys,0,.62,0),Xe(e,1.62,.12,1.62,Nl,0,-.2,0);for(const[t,n]of[[-.7,-.7],[.7,-.7],[-.7,.7],[.7,.7]])Xe(e,.06,1.3,.06,Ln,t*.6,1.25,n*.6).rotation.set(n*.4,0,-t*.4);return Xe(e,.3,.2,.3,Ln,0,1.9,0),e}case"heliHose":{Xe(e,1.8,.8,.9,Br,0,0,0),Xe(e,1.82,.12,.92,Nl,0,.1,0),Xe(e,.3,.3,.3,zl,-.6,.55,0),Xe(e,1.2,.22,.22,Ws,1.4,-.2,0,-.35),Xe(e,.3,.32,.32,Ln,.95,0,0,-.35);for(let t=0;t<4;t++)Xe(e,.22+t*.06,.22+t*.06,.22+t*.06,Ys,2.15+t*.32,-.55-t*.22,0,-.35);return e}case"turbo":{Xe(e,1.3,.9,1,zl,0,0,0),Xe(e,1.32,.14,1.02,Br,0,.2,0);for(let t=0;t<3;t++)Xe(e,.16,.7,.16,7041916,-.4+t*.4,.75,.3);Xe(e,.2,.5,.2,Ln,0,.7,-.2);for(const t of[0,Math.PI*2/3,Math.PI*4/3]){const n=Xe(e,1.6,.06,.24,Ln,0,0,0);n.position.set(Math.cos(t)*.8,1,-.2+Math.sin(t)*.8),n.rotation.y=-t}return Xe(e,.5,.36,.3,16765501,.85,-.2,.4),e}case"longHose":{for(let n=0;n<4;n++){const r=.9-n%2*.12;for(let s=0;s<16;s++){const a=s/16*Math.PI*2;Xe(e,.26,.24,2*Math.PI*r/16+.05,n%2?14725152:Hr,Math.cos(a)*r,n*.24,Math.sin(a)*r).rotation.y=-a}}return Xe(e,.6,.24,.26,Hr,1.15,0,.3),Xe(e,.5,.22,.22,Ws,1.65,0,.3),e}case"powerHose":{Xe(e,.4,.4,.4,Ln,-.9,0,0),Xe(e,1.4,.3,.3,Ws,0,0,0),Xe(e,.36,.36,.36,Br,-.4,0,0),Xe(e,.2,.5,.2,Br,-.4,-.4,0),Xe(e,.5,.2,.2,Hr,-1.3,0,0);for(let t=0;t<5;t++)Xe(e,.2+t*.07,.2+t*.07,.2+t*.07,Ys,.95+t*.36,0,0);return e}case"thermal":return Xe(e,1.2,.9,.5,Hr,0,0,0),Xe(e,.9,.62,.04,Ln,0,.05,.27),Xe(e,.5,.32,.02,3812056,-.12,.1,.3),Xe(e,.28,.24,.02,16730650,.18,-.02,.3),Xe(e,.14,.12,.02,16769594,.18,-.02,.31),Xe(e,.42,.42,.3,Ln,0,.05,-.38),Xe(e,.3,.7,.36,13148192,0,-.75,-.02),e}return null}const kt=128,jr=new Uint8ClampedArray(256);for(let i=0;i<256;i++){const e=i/255;jr[i]=Math.round(255*(e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055))}function Ig(i){const e=Ai(i);if(!e)return null;if(e.slot==="mask")return zc(i);if(e.slot==="hat")return kc(i);if(e.slot==="glasses")return Nc(i);if(e.slot==="outfit"){const t=Fc(i);return t.head&&t.body.add(t.head.translateY(.95)),t.body}if(e.slot==="buddy")return Kc();if(e.slot==="shoes"){const t=new Pe;for(const n of[-1,1])t.add(Oc(i).translateX(n*.3));return t}switch(i){case"kick":return Qo();case"scooter":return Wc();case"skateboard":return Yc();case"bike":return Xc();case"fireTruck":return qc();case"umbrella":return Gc();case"brolly":return Vc();case"tumbler":return Bc();case"grabber":return pg();case"luckycat":return mg();case"magnet":return gg();case"goldfish":return Hc().root;case"dog":case"cat":case"bird":case"chicken":return fg(i).root}return Lg(i)}class g_{constructor(e){this.renderer=e,this.scene=new wm,this.camera=new Vt(30,1,.1,60),this.target=new Nn(kt,kt),this.pixels=new Uint8Array(kt*kt*4),this.canvas=document.createElement("canvas"),this.cache=new Map,this.clear=new Ae,this.box=new Fn,this.centre=new C,this.size=new C,this.canvas.width=this.canvas.height=kt,this.scene.add(new Cm(16777215,14272410,2.2));const t=new Im(16774880,1.4);t.position.set(3,6,8),this.scene.add(t)}item(e){if(this.cache.has(e))return this.cache.get(e);const t=Ig(e),n=t?this.draw(t,.6,.35):null;return this.cache.set(e,n),n}wearing(e,t,n){const r=`${e}|${JSON.stringify(t)}|${n.hat}|${n.glasses}|${n.mask}|${n.clothes}|${n.shoes}|${n.buddy}`,s=this.cache.get(r);if(s)return s;const a=new Xm(e,t);a.setForm("human"),a.setBag(null),Mg(a,{hat:n.hat,glasses:n.glasses,mask:n.mask,clothes:n.clothes,shoes:n.shoes,buddy:n.buddy}),a.update(.016,0);const o=this.draw(a.root,.35,.12);return this.cache.set(r,o),o}draw(e,t,n){this.scene.add(e),e.updateMatrixWorld(!0),this.box.setFromObject(e),this.box.getCenter(this.centre);const s=this.box.getSize(this.size).length()/2/Math.sin(ld.degToRad(this.camera.fov/2))*.95;this.camera.position.copy(this.centre).add(new C(Math.sin(t),n,Math.cos(t)).normalize().multiplyScalar(s)),this.camera.lookAt(this.centre);const a=this.renderer,o=a.getRenderTarget(),l=a.getClearAlpha();a.getClearColor(this.clear),a.setRenderTarget(this.target),a.setClearColor(0,0),a.clear(),a.render(this.scene,this.camera),a.readRenderTargetPixels(this.target,0,0,kt,kt,this.pixels),a.setRenderTarget(o),a.setClearColor(this.clear,l),this.scene.remove(e),e.traverse(d=>d.isMesh&&d.geometry.dispose());const c=this.canvas.getContext("2d"),h=c.createImageData(kt,kt);for(let d=0;d<kt;d++){const u=(kt-1-d)*kt*4,p=d*kt*4;for(let g=0;g<kt*4;g+=4)h.data[p+g]=jr[this.pixels[u+g]],h.data[p+g+1]=jr[this.pixels[u+g+1]],h.data[p+g+2]=jr[this.pixels[u+g+2]],h.data[p+g+3]=this.pixels[u+g+3]}return c.putImageData(h,0,0),this.canvas.toDataURL()}}const Dg={title:"Sumatra Forest Fire",alertTitle:"⚠️ Haze alert!",alertText:"Singapore's sky has gone grey. PSI 180: the air is unhealthy! The smoke is coming from forest fires in Sumatra.",alertGo:"🚁 Fly the fire helicopter!",alertLater:"Later",alertPill:"🚁 Sumatra fire",next:"Next ▶",skip:"Skip ⏭",story1:"Haze alert! Singapore's sky has turned grey and smoky. PSI is 180: too smoky to play outside.",story2:"Where is the smoke from? Across the sea, the forests of Sumatra in Indonesia are on fire. The wind carries the smoke all the way to Singapore.",story3:"Why did the fire start? Sumatra has a lot of peatland: soft, spongy ground made of old leaves and wood piled up over thousands of years. When it's drained and dries out, it catches fire very easily. When people burn the forest to clear land for farms, the fire spreads through the dry ground.",story4:"Fire helicopter, go! Become firefighters, put out the fires and save the forest animals!",whoGoes:"Who will go?",whoHint:"Everyone wears a firefighter suit 🧑‍🚒",go:"Let's fly!",flying:"Singapore ➜ Sumatra",water:"Water",drop:"Drop water",fires:"Fires",animals:"Animals",onBoard:"In the helicopter",stepWater:"Scoop water",stepFire:"Put out fires",stepSave:"Save animals",stepCenter:"Fly to the rescue centre",scoopHint:"Fly over the river or the sea to fill the water bucket 💧",firstScoop:"Bucket full! Fire helicopters scoop water from rivers, lakes and the sea.",goFire:'Fly over a fire 🔥 and tap "Drop water"!',needWater:"The bucket is empty! Fly over water to fill it 💧",missed:"Splash! Drop it right over the fire 🔥",hit:"Sssss! The fire is getting smaller!",smolderTitle:"Still smoking?!",smolderText:"The flames are out, but smoke is still coming up! Peat fires burn under the ground, hidden. Firefighters have to soak the ground with lots of water. That's why peat fires are the hardest fires to put out.",fireOut:"The fire is out! 🌱 Little plants will grow back.",blocked:"Put out the fire first! 🔥",rescued:"Saved! Take them to the rescue centre 🏥",centerTitle:"Wildlife rescue centre",centerText:"The animals get a check-up, food and a safe place to rest. When they are well, they go back to the forest.",centerSign:"WILDLIFE RESCUE",orangutan:"Orangutan",orangutanBaby:"Orangutan mum and baby",sunbear:"Sun bear",tapir:"Malayan tapir",factOrangutan:'Orangutan means "person of the forest". Wild orangutans live only in the forests of Sumatra and Borneo. When the forest burns, they lose their home.',factSunbear:"The sun bear is the smallest bear in the world. It has a yellow patch on its chest like a rising sun.",factTapir:"The Malayan tapir is black and white like a panda, with a long nose for picking leaves.",tip1:"Smoke makes it hard to see. Firefighters wear masks and fight fires for days.",tip2:"Peat fires hide under the ground. That makes them very hard to put out.",tip3:"In the dry season there is little rain, so the forest dries out and fires spread faster.",tip4:"A helicopter carries lots of water, but a big fire needs many drops.",endTitle:"All the fires are out!",endText:"The animals are safe at the rescue centre. The wind brings clean air back to Singapore. PSI 180 ➜ 40 😄",endHelp:"What can we do? 🌱 Choose things made without burning forests, plant trees, and on haze days wear a mask and play indoors.",backCity:"🏙️ Back to Singapore",keepFlying:"Keep flying",playAgain:"Play from the start",menu:"Menu",coinsGot:"+{n} 🪙",pangolin:"Sunda pangolin",factPangolin:"Pangolins are covered in scales and curl into a ball when they are scared. They eat ants and termites with a long sticky tongue. They are very rare now.",stagePick:"Where shall we fly?",stageN:"Stage {n}",stage1:"Forest edge",stage2:"Deep peat",stage3:"Windy dry season",locked:"Finish the stage before first 🔒",intro2Title:"Fire under the ground!",intro2:"Here the peat is very deep. Even after the flames are out, it keeps burning under the ground, where helicopter water can't reach. Land in the clearing by the canal and walk in with a hose from the pump. A shy pangolin is hiding in the bush, too!",intro3Title:"Windy dry season",intro3:"No rain for weeks, and a strong wind. Fires you leave alone spread into the dry trees and get bigger. Put them out quickly!",land:"Land",board:"Get in",hose:"Hose (hold)",deep:"Helicopter water can't reach fire under the ground! Land by the canal 🚁⬇️ and use the hose.",landHint:'Tap "Land" to put the helicopter down 🚁⬇️',landed:"Hold the hose button and point at the glowing ground 💦",canalTitle:"Water from the canal",canalText:"People dug canals like this to drain the water out of the peat swamp for farming. Dry peat catches fire easily. Now the pump sends the canal water back into the ground. To stop peat fires, people also block canals so the peat stays wet.",spotOut:"A hot spot is out! 💨",deepOut:"The fire under the ground is out too! 🌱",tooHot:"Too hot! Spray the flames first 💦",hoseEnd:"The hose won't stretch any further",thick:"The bush is too thick for the ladder. Land nearby 🚁⬇️ and walk in.",follow:"The pangolin is following you! Take it back to the helicopter 🚁",tookOff:"Back in the air!",spread:"The wind spread a fire! It got bigger 🔥",spreadEagle:"The eagle spotted a fire spreading! 🦅🔥",stepGround:"Fire under the ground",stageDone:"Stage {n} clear!",newFriend:"A new friend joins the team!",nextStage:"Next stage ▶",gearTitle:"Fire gear",cannon:"Water cannon (hold)",gearHint:"Buy fire gear at a mama shop in the city (🚒 tab) 🪙",factEagle:"White-bellied sea eagles soar over the coasts and rivers of Sumatra, looking far with sharp eyes.",factElephant:"Sumatran elephants are a little smaller than other Asian elephants. In Sumatra, teams of rangers and elephants patrol the forest together to protect it.",factHornbill:"Hornbills eat fruit and drop the seeds far away, so new trees grow. They are called the forest's farmers.",ringFirst:"🌬️ Whoosh! Fly through the wind rings to go fast",ring:"🌬️ Whoosh!",ringChain:"🌬️🌬️🌬️ All three rings! +3 🪙",emberLand:"An ember flew out and started a little fire! Put it out quickly for ⭐⭐⭐",emberTitle:"Flying embers",emberText:"In strong wind, glowing bits of burning wood (embers) fly far away and start new fires. Firefighters keep watching around a big fire so they can put the little ones out before they grow.",ember3:"Super quick! ⭐⭐⭐",ember2:"Nice! ⭐⭐",ember1:"Out! ⭐",tornadoTitle:"A fire whirl!",tornadoText:"When a forest fire is very hot and windy, the hot air rising off it can start to spin into a tall whirl of fire. It really happens! Pour water on it from above, three times.",tornadoHit1:"Hit! It spins faster and throws embers!",tornadoHit2:"Hit! Now it runs away from the helicopter. Chase it!",tornadoGone:"The fire whirl is gone! 🌧️",tornadoBump:"Whoa, hot wind! Pour the water from just beside it",giftTitle:"🎁 A present for the city!",gift1:"🧑‍🚒 Firefighter suit",gift2:"🦧 Baby orangutan plush",gift3:"🚒 Little fire truck",giftHint:'Find it in "my things" in the city.',alertThickTitle:"⚠️ The haze is so thick!",alertThickText:"PSI is over 300 and you can hardly see. The haze won't clear until the fires in Sumatra are out!",alertCalmTitle:"🚁 Sumatra fire team",alertCalmText:"The skies are clear now. Fly back to the forest and play another stage?"},Ug={title:"수마트라 산불",alertTitle:"⚠️ 연무(헤이즈) 경보!",alertText:"싱가포르 하늘이 뿌옇게 변했어요. PSI 180, 건강에 나쁜 공기예요! 수마트라 산불 연기가 몰려왔어요.",alertGo:"🚁 소방 헬기 출동!",alertLater:"조금 있다가",alertPill:"🚁 수마트라 산불",next:"다음 ▶",skip:"건너뛰기 ⏭",story1:"연무 경보! 싱가포르 하늘이 뿌옇게 변했어요. PSI가 180이라 밖에서 놀기 힘든 공기예요.",story2:"연기는 어디서 왔을까? 바다 건너 인도네시아 수마트라 섬의 숲에서 큰불이 났어요. 바람이 연기를 싱가포르까지 실어 왔어요.",story3:"왜 불이 났을까? 수마트라에는 '이탄지'라는 땅이 많아요. 오래된 나뭇잎과 나무가 수천 년 동안 쌓인 스펀지 같은 땅이에요. 물을 빼서 마르면 불이 아주 잘 붙어요. 농장을 만들려고 숲을 불로 태우면, 그 불이 마른 땅을 타고 크게 번져요.",story4:"소방 헬기 출동! 소방관이 되어 불을 끄고, 숲에 사는 동물 친구들을 구해 줘요!",whoGoes:"누가 갈래?",whoHint:"모두 소방관 옷을 입어요 🧑‍🚒",go:"출동!",flying:"싱가포르 ➜ 수마트라",water:"물",drop:"물 뿌리기",fires:"불",animals:"동물",onBoard:"헬기에 탄 친구",stepWater:"물 뜨기",stepFire:"불 끄기",stepSave:"동물 구하기",stepCenter:"보호센터로 데려가기",scoopHint:"강이나 바다 위로 날아가면 물통에 물이 차요 💧",firstScoop:"물통이 가득! 소방 헬기는 강, 호수, 바다에서 물을 퍼 와요.",goFire:'불 🔥 위로 날아가서 "물 뿌리기"를 눌러요!',needWater:"물통이 비었어요! 물 위로 날아가서 채워요 💧",missed:"첨벙! 불 바로 위에서 뿌려요 🔥",hit:"치이익! 불이 작아지고 있어요!",smolderTitle:"아직도 연기가?!",smolderText:"불꽃은 꺼졌는데 연기가 계속 나요! 이탄지 불은 땅속에 숨어서 타요. 그래서 소방관들은 땅이 흠뻑 젖도록 물을 아주 많이 뿌려야 해요. 이탄지 불이 끄기 가장 어려운 불이에요.",fireOut:"불이 꺼졌어요! 🌱 작은 새싹이 다시 자랄 거예요.",blocked:"먼저 불을 꺼요! 🔥",rescued:"구했어요! 보호센터로 데려가요 🏥",centerTitle:"야생동물 보호센터",centerText:"동물들은 여기서 치료받고, 먹이를 먹고, 안전하게 쉬어요. 다 나으면 다시 숲으로 돌아가요.",centerSign:"야생동물 보호센터",orangutan:"오랑우탄",orangutanBaby:"오랑우탄 엄마와 아기",sunbear:"말레이곰",tapir:"말레이맥",factOrangutan:"오랑우탄은 '숲의 사람'이라는 뜻이에요. 야생 오랑우탄은 수마트라와 보르네오 숲에만 살아요. 숲이 타면 집을 잃어요.",factSunbear:"말레이곰은 세상에서 가장 작은 곰이에요. 가슴에 떠오르는 해 같은 노란 무늬가 있어요.",factTapir:"말레이맥은 판다처럼 검은색과 흰색이에요. 긴 코로 나뭇잎을 따 먹어요.",tip1:"연기 때문에 앞이 잘 안 보여요. 소방관들은 마스크를 쓰고 며칠 동안 불과 싸워요.",tip2:"이탄지 불은 땅속에 숨어서 타요. 그래서 끄기가 아주 어려워요.",tip3:"건기에는 비가 적게 와서 숲이 마르고, 불이 더 빨리 번져요.",tip4:"헬기는 물을 많이 나르지만, 큰 불은 여러 번 뿌려야 해요.",endTitle:"불을 모두 껐어요!",endText:"동물 친구들은 보호센터에서 안전해요. 바람이 다시 맑은 공기를 싱가포르로 보내요. PSI 180 ➜ 40 😄",endHelp:"우리가 할 수 있는 일: 🌱 숲을 태우지 않고 만든 물건 고르기, 나무 심기, 연무가 심한 날엔 마스크 쓰고 실내에서 놀기.",backCity:"🏙️ 싱가포르로 돌아가기",keepFlying:"계속 날기",playAgain:"처음부터 다시",menu:"메뉴",coinsGot:"+{n} 🪙",pangolin:"천산갑",factPangolin:"천산갑은 몸이 비늘로 덮여 있고, 무서우면 공처럼 몸을 말아요. 길고 끈적한 혀로 개미와 흰개미를 먹어요. 지금은 아주 드문 동물이에요.",stagePick:"어디로 출동할까?",stageN:"{n}단계",stage1:"숲 가장자리",stage2:"깊은 이탄지",stage3:"바람 부는 건기",locked:"앞 단계를 먼저 끝내요 🔒",intro2Title:"땅속에 숨은 불!",intro2:"여기는 이탄지가 아주 깊어요. 불꽃이 꺼져도 땅속에서 계속 타요. 헬기 물은 땅속까지 안 닿아요. 수로 옆 빈터에 헬기를 내리고, 펌프에 연결한 호스를 들고 걸어 들어가요. 수줍은 천산갑도 덤불에 숨어 있어요!",intro3Title:"바람 부는 건기",intro3:"몇 주째 비가 안 오고 바람이 세게 불어요. 그냥 두면 불이 마른 나무로 번져서 더 커져요. 빨리 꺼요!",land:"내리기",board:"헬기 타기",hose:"호스 (꾹 누르기)",deep:"땅속 불에는 헬기 물이 안 닿아요! 수로 옆에 내려서 🚁⬇️ 호스로 꺼요.",landHint:'"내리기"를 누르면 헬기가 내려앉아요 🚁⬇️',landed:"호스 버튼을 꾹 누르고 빨갛게 빛나는 땅을 향해요 💦",canalTitle:"수로의 물",canalText:"사람들은 농사를 지으려고 이탄지에 이런 수로를 파서 물을 빼냈어요. 마른 이탄지는 불이 잘 붙어요. 지금은 펌프로 수로의 물을 다시 땅속에 넣어요. 이탄지 불을 막으려고 수로를 막아서 땅을 촉촉하게 지키는 일도 해요.",spotOut:"불씨 하나 꺼졌어요! 💨",deepOut:"땅속 불까지 다 꺼졌어요! 🌱",tooHot:"너무 뜨거워요! 먼저 불꽃에 물을 뿌려요 💦",hoseEnd:"호스가 더 이상 안 늘어나요",thick:"덤불이 빽빽해서 사다리가 안 닿아요. 근처에 내려서 🚁⬇️ 걸어가요.",follow:"천산갑이 따라와요! 헬기까지 데려가요 🚁",tookOff:"다시 하늘로!",spread:"바람에 불이 번졌어요! 불이 커졌어요 🔥",spreadEagle:"독수리가 번지는 불을 찾았어요! 🦅🔥",stepGround:"땅속 불 끄기",stageDone:"{n}단계 성공!",newFriend:"새 친구가 생겼어요!",nextStage:"다음 단계 ▶",gearTitle:"소방 장비",cannon:"물대포 (꾹 누르기)",gearHint:"도시 마마숍 🚒 칸에서 소방 장비를 살 수 있어요 🪙",factEagle:"흰배바다수리는 수마트라의 바닷가와 강 위를 날아요. 눈이 좋아서 아주 멀리까지 봐요.",factElephant:"수마트라코끼리는 다른 아시아코끼리보다 조금 작아요. 수마트라에서는 사람과 코끼리가 한 팀이 되어 숲을 순찰하며 지켜요.",factHornbill:"코뿔새는 열매를 먹고 씨앗을 멀리 떨어뜨려서 새 나무가 자라게 해요. 그래서 숲의 농부라고 불려요.",ringFirst:"🌬️ 슝! 바람 고리를 지나가면 빨라져요",ring:"🌬️ 슝!",ringChain:"🌬️🌬️🌬️ 고리 3개 모두! +3 🪙",emberLand:"불티가 날아가 작은 불이 났어요! 빨리 끄면 ⭐⭐⭐",emberTitle:"날아가는 불티",emberText:"바람이 세면 타던 나무 조각(불티)이 멀리 날아가 새 불을 내요. 그래서 소방관은 큰 불 주변을 계속 살피면서, 작은 불이 커지기 전에 꺼요.",ember3:"엄청 빨라요! ⭐⭐⭐",ember2:"잘했어요! ⭐⭐",ember1:"꺼졌어요! ⭐",tornadoTitle:"불 회오리다!",tornadoText:"산불이 아주 뜨겁고 바람이 불면, 위로 올라가는 뜨거운 공기가 빙글빙글 돌면서 커다란 불 회오리가 생겨요. 진짜로 있는 일이에요! 위에서 물을 3번 부어요.",tornadoHit1:"맞았다! 더 빨리 돌면서 불티를 던져요!",tornadoHit2:"맞았다! 이제 헬기를 피해 도망가요. 쫓아가요!",tornadoGone:"불 회오리가 사라졌어요! 🌧️",tornadoBump:"앗, 뜨거운 바람! 바로 옆에서 물을 부어요",giftTitle:"🎁 도시에서 쓸 선물!",gift1:"🧑‍🚒 소방관 옷",gift2:"🦧 아기 오랑우탄 인형",gift3:"🚒 작은 소방차",giftHint:'도시의 "내 물건"에서 찾아보세요.',alertThickTitle:"⚠️ 연무가 너무 짙어요!",alertThickText:"PSI가 300을 넘어서 앞이 거의 안 보여요. 수마트라 불을 꺼야 하늘이 맑아져요!",alertCalmTitle:"🚁 수마트라 소방대",alertCalmText:"지금은 하늘이 맑아요. 숲으로 다시 날아가서 다른 단계를 해 볼까요?"};function Jc(i){return(ns()==="ko"?Ug:Dg)[i]}function __(i,e,t){const n=document.createElement(i);return e&&(n.className=e),n.dataset.fire=t,n.textContent=Jc(t),n}function x_(){document.querySelectorAll("[data-fire]").forEach(i=>i.textContent=Jc(i.dataset.fire))}const Le=(i,e,t,n)=>new Ge(ar(i,e,t,.5),n),rt=i=>de(i,"plain");function y_(){const i=new Pe,e=new Pe;i.add(e);const t=new kr({color:14165534,roughness:.32,metalness:.15}),n=new kr({color:16053488,roughness:.35,metalness:.1}),r=new kr({color:3027512,roughness:.5,metalness:.6}),s=new kr({color:6982298,roughness:.05,metalness:.4,transparent:!0,opacity:.5}),a=Le(3.2,.8,5.4,t);a.position.y=-1.1;const o=Le(3.28,.26,5.46,n);o.position.y=-1;const l=Le(3.2,.35,5,t);l.position.y=1.35;const c=Le(3.2,2.6,.35,t);c.position.set(0,.1,-2.5);const h=Le(3,.9,1,t);h.position.set(0,-.95,3.1);const d=Le(2.9,1.8,.3,s);d.position.set(0,.35,2.75),d.rotation.x=-.25,e.add(a,o,l,c,h,d);for(const[A,B]of[[-1.45,2.4],[1.45,2.4],[-1.45,-2.35],[1.45,-2.35]]){const N=Le(.3,2.5,.3,t);N.position.set(A,.1,B),e.add(N)}const u=Le(1.4,.05,.4,n);u.position.set(0,1.55,0);const p=Le(.4,.05,1.4,n);p.position.set(0,1.55,0),e.add(u,p);const g=Le(.8,.8,6,t);g.position.set(0,.7,-5.6);const x=Le(.25,2.2,1.3,t);x.position.set(0,1.6,-8.4);const m=Le(2.4,.2,.8,n);m.position.set(0,.8,-7.9),e.add(g,x,m);const f=new Pe;f.position.set(.3,1.6,-8.4);const E=Le(.1,2.6,.3,r),b=Le(.1,.3,2.6,r);f.add(E,b),e.add(f);const S=Le(.5,.7,.5,r);S.position.y=1.85,e.add(S);const z=new Pe;z.position.y=2.25;const T=Le(.5,.12,12,r),R=Le(12,.12,.5,r);z.add(T,R),e.add(z);const U=new Ge(new sr(12.4,12.4).rotateX(-Math.PI/2),new Sn({map:zg(),transparent:!0,depthWrite:!1}));U.position.y=2.28,e.add(U);for(const A of[-1,1]){const B=Le(.25,.25,6,r);B.position.set(A*1.5,-2.35,.3),e.add(B);for(const N of[-1.4,1.6]){const H=Le(.18,.9,.18,r);H.position.set(A*1.4,-1.85,N),e.add(H)}}const w=new Pe;e.add(w);const y=[new C(-.72,-.75,1.1),new C(.72,-.75,1.1),new C(0,-.75,-1.2)];return{group:i,body:e,rotor:z,tailRotor:f,seats:y,cabin:w}}function zg(){const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d"),n=t.createRadialGradient(128/2,128/2,128*.05,128/2,128/2,128/2);return n.addColorStop(0,"rgba(40,44,50,0.05)"),n.addColorStop(.85,"rgba(40,44,50,0.22)"),n.addColorStop(1,"rgba(40,44,50,0)"),t.fillStyle=n,t.fillRect(0,0,128,128),new or(e)}function v_(){const i=new Pe,e=new Ge(new Mt(.12,1,.12).translate(0,-.5,0),rt(2763306)),t=new Pe,n=rt(16742938),r=Le(1.7,1.3,1.7,n),s=Le(1.9,.2,1.9,rt(2763306));s.position.y=.7;const a=Le(1.5,.2,1.5,new Sn({color:6277375}));a.position.y=.66,t.add(r,s,a),i.add(e,t);const o=new Pe,l=rt(14266986);for(const c of[-.5,.5]){const h=new Ge(new Mt(.1,1,.1).translate(0,-.5,0),l);h.position.x=c,h.name="rail",o.add(h)}return o.visible=!1,{group:i,rope:e,pail:t,water:a,ladder:o}}function S_(i){const e=i.part("head"),t=rt(16761370),n=new Pe,r=Le(1.46,.55,1.46,t);r.position.y=.82;const s=Le(.3,.2,1.5,t);s.position.y=1.15;const a=Le(1.66,.12,1.86,t);a.position.set(0,.55,-.08);const o=Le(.4,.4,.08,rt(15020080));o.position.set(0,.85,.75),n.add(r,s,a,o),n.userData.fireKit=!0,e.add(n);const l=i.part("body"),c=Le(1.03,.96,.63,rt(14247979)),h=rt(16773466),d=Le(1.06,.1,.66,h);d.position.y=-.22;const u=Le(1.06,.1,.66,h);u.position.y=.12;for(const p of[c,d,u])p.userData.fireKit=!0;l.add(c,d,u)}function w_(i){const e=new Pe,t=new ei({vertexColors:!0});if(i==="orangutan"||i==="orangutanBaby"){if(e.add(new Ge(kl(),t)),i==="orangutanBaby"){const n=new Ge(kl(),t);n.scale.setScalar(.42),n.position.set(.1,1,.55),e.add(n)}}else if(i==="sunbear"){const r=[{x:0,y:.95,z:0,w:1.5,h:1,d:2.1,color:2038296},{x:0,y:1.45,z:1.35,w:1,h:.9,d:.9,color:2038296},{x:0,y:1.3,z:1.9,w:.55,h:.45,d:.4,color:13214826},{x:0,y:1.42,z:2.12,w:.2,h:.15,d:.08,color:0},{x:0,y:1,z:1.07,w:.8,h:.35,d:.06,color:16765501},{x:-.4,y:2,z:1.3,w:.25,h:.25,d:.2,color:2038296},{x:.4,y:2,z:1.3,w:.25,h:.25,d:.2,color:2038296},{x:-.25,y:1.65,z:1.81,w:.12,h:.12,d:.05,color:16777215},{x:.25,y:1.65,z:1.81,w:.12,h:.12,d:.05,color:16777215}];for(const[s,a]of[[-.5,.7],[.5,.7],[-.5,-.7],[.5,-.7]])r.push({x:s,y:.3,z:a,w:.4,h:.6,d:.45,color:2038296});e.add(new Ge(wi(r),t))}else if(i==="pangolin"){const s=[{x:0,y:.75,z:0,w:1,h:.8,d:1.6,color:9071162},{x:0,y:1.15,z:-.2,w:.9,h:.25,d:1.3,color:6966824},{x:0,y:.7,z:1.05,w:.6,h:.55,d:.6,color:9071162},{x:0,y:.6,z:1.45,w:.32,h:.3,d:.4,color:13213818},{x:-.18,y:.82,z:1.33,w:.1,h:.1,d:.05,color:0},{x:.18,y:.82,z:1.33,w:.1,h:.1,d:.05,color:0},{x:0,y:.55,z:-1.15,w:.6,h:.45,d:.8,color:9071162},{x:0,y:.4,z:-1.75,w:.4,h:.32,d:.6,color:6966824}];for(let c=0;c<4;c++)s.push({x:0,y:1-c*.02,z:.55-c*.4,w:1.06,h:.2,d:.22,color:6966824});for(const[c,h]of[[-.35,.5],[.35,.5],[-.35,-.5],[.35,-.5]])s.push({x:c,y:.2,z:h,w:.26,h:.4,d:.3,color:4864546});const a=new Ge(wi(s),t);a.name="walk",a.visible=!1;const o=[{x:0,y:.7,z:0,w:1.3,h:1.3,d:1.3,color:9071162}];for(let c=0;c<5;c++){const h=c/5*Math.PI*2;o.push({x:Math.sin(h)*.62,y:.7+Math.cos(h)*.62,z:0,w:.5,h:.5,d:1.36,color:6966824})}const l=new Ge(wi(o),t);l.name="ball",e.add(a,l)}else{const s=[{x:0,y:1.2,z:.85,w:1.2,h:1.2,d:.9,color:2368810},{x:0,y:1.22,z:-.1,w:1.26,h:1.26,d:1.1,color:15658730},{x:0,y:1.2,z:-1.05,w:1.2,h:1.2,d:.9,color:2368810},{x:0,y:1.25,z:1.7,w:.8,h:.8,d:.9,color:2368810},{x:0,y:1,z:2.3,w:.4,h:.4,d:.5,color:2368810},{x:-.25,y:1.5,z:2.16,w:.12,h:.12,d:.05,color:16777215},{x:.25,y:1.5,z:2.16,w:.12,h:.12,d:.05,color:16777215},{x:-.3,y:1.75,z:1.5,w:.2,h:.25,d:.15,color:15658730},{x:.3,y:1.75,z:1.5,w:.2,h:.25,d:.15,color:15658730}];for(const[a,o]of[[-.4,.9],[.4,.9],[-.4,-1],[.4,-1]])s.push({x:a,y:.3,z:o,w:.38,h:.6,d:.4,color:2368810});e.add(new Ge(wi(s),t))}return e}function kl(){return wi([{x:0,y:1.25,z:0,w:1.2,h:1.3,d:.9,color:12605482},{x:0,y:2.25,z:.05,w:.95,h:.85,d:.85,color:12605482},{x:0,y:2.2,z:.5,w:.7,h:.55,d:.1,color:14262906},{x:-.17,y:2.33,z:.56,w:.12,h:.12,d:.05,color:0},{x:.17,y:2.33,z:.56,w:.12,h:.12,d:.05,color:0},{x:-.82,y:1.05,z:.05,w:.38,h:1.7,d:.38,color:9058842},{x:.82,y:1.05,z:.05,w:.38,h:1.7,d:.38,color:9058842},{x:-.3,y:.35,z:0,w:.42,h:.7,d:.42,color:9058842},{x:.3,y:.35,z:0,w:.42,h:.7,d:.42,color:9058842}])}function Fl(i){const e=document.createElement("canvas");e.width=512,e.height=96;const t=e.getContext("2d");t.fillStyle="#2f7a32",t.fillRect(0,0,512,96),t.fillStyle="#ffffff",t.font="bold 44px system-ui, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText(i,256,50);const n=new or(e);return n.colorSpace=Rt,n}function M_(i){const e=new Pe,t=de(11565637,"planks"),n=de(3115594,"noise"),r=Le(10,4,7,t);r.position.set(-4,2,-8);const s=Le(11,.8,8,n);s.position.set(-4,4.4,-8);const a=Le(8,.8,5.5,n);a.position.set(-4,5.2,-8);const o=Le(1.6,2.6,.2,rt(7031339));o.position.set(-4,1.3,-4.45),e.add(r,s,a,o);const l=new Sn({map:Fl(i)}),c=new Ge(new Mt(8,1.5,.2),[rt(7031339),rt(7031339),rt(7031339),rt(7031339),l,rt(7031339)]);c.position.set(-4,3.3,-4.3),e.add(c);const h=new Ge(new Mt(10,.2,10),[rt(10132122),rt(10132122),new ei({map:Qc()}),rt(10132122),rt(10132122),rt(10132122)]);h.position.set(8,.1,6),e.add(h);const d=rt(9067051),u={x:-6,z:8,w:14,d:10};for(let g=0;g<=14;g+=2)for(const x of[u.z-u.d/2,u.z+u.d/2]){const m=Le(.3,1.4,.3,d);m.position.set(u.x-u.w/2+g,.7,x),e.add(m)}for(let g=0;g<=10;g+=2)for(const x of[u.x-u.w/2,u.x+u.w/2]){const m=Le(.3,1.4,.3,d);m.position.set(x,.7,u.z-u.d/2+g),e.add(m)}for(const[g,x]of[[u.x-4,u.z-2],[u.x+3,u.z+1]]){for(const[f,E]of[[-1,-1],[1,-1],[-1,1],[1,1]]){const b=Le(.35,4,.35,d);b.position.set(g+f,2,x+E),e.add(b)}const m=Le(2.6,.3,2.6,t);m.position.set(g,3.6,x),e.add(m)}const p=[new C(u.x-4,3.75,u.z-2),new C(u.x+3,3.75,u.z+1),new C(u.x-1,0,u.z+2.5),new C(u.x+4.5,0,u.z-3),new C(u.x-5,0,u.z+3)];return{group:e,pad:new C(8,0,6),slots:p,sign:l,setSign:g=>l.map=Fl(g)}}function Qc(){const i=document.createElement("canvas");i.width=16,i.height=16;const e=i.getContext("2d");e.fillStyle="#7a7f86",e.fillRect(0,0,16,16),e.fillStyle="#ffd23d",e.fillRect(0,0,16,1),e.fillRect(0,15,16,1),e.fillRect(0,0,1,16),e.fillRect(15,0,1,16),e.fillStyle="#ffffff",e.fillRect(4,4,8,2),e.fillRect(4,10,8,2),e.fillRect(7,6,2,4);const t=new or(i);return t.magFilter=wt,t.minFilter=wt,t.colorSpace=Rt,t}function b_(){const i=new Pe,e=new Sn({color:16769594}),t=new Ge(new Mt(1.4,3,1.4),e);return t.position.y=2,i.add(t),[3.6,2.4,1.2].forEach((n,r)=>{const s=new Ge(new Mt(n,.7,n),e);s.position.y=.2-r*.7,i.add(s)}),i}function E_(i,e){const t=new Pe,n=new Ge(new Mt(8,.16,8),[rt(9071172),rt(9071172),new ei({map:Qc()}),rt(9071172),rt(9071172),rt(9071172)]);n.position.y=.08,n.receiveShadow=!0,t.add(n);const r=new Pe,s=de(14165546,"plain"),a=rt(3356218),o=Le(1.4,.9,1,s);o.position.y=.75;const l=Le(.8,.7,.8,a);l.position.set(-.3,1.45,0);const c=Le(1.7,.15,1.2,a);c.position.y=.2;const h=Le(.25,.25,1.8,rt(2763306));return h.position.set(.9,.25,0),h.rotation.y=Math.atan2(i,e)-Math.PI/2,r.add(o,l,c,h),r.position.set(i,0,e),r.rotation.y=Math.atan2(i,e)+Math.PI/2,t.add(r),t}function T_(i){const e=new Pe,t=de(15909424,"plain");for(let n=0;n<i;n++){const r=new Ge(new Mt(.28,.22,1),t);r.castShadow=!0,e.add(r)}return e}function A_(){const i=new Pe,e=Le(.22,.22,.7,de(14262842,"plain"));e.position.z=.35;const t=Le(.3,.3,.3,rt(2763306));return i.add(e,t),i}export{n_ as $,jg as A,Mt as B,Ae as C,on as D,zt as E,Lt as F,Pe as G,$g as H,Og as I,Jg as J,fg as K,Jn as L,Sn as M,wt as N,wm as O,sr as P,Ni as Q,Vt as R,Rt as S,Gg as T,_c as U,C as V,kg as W,Cm as X,Im as Y,vg as Z,l_ as _,Wg as a,Xm as a0,pg as a1,Mg as a2,s_ as a3,a_ as a4,Ai as a5,h_ as a6,wg as a7,c_ as a8,yc as a9,vc as aA,Pt as aB,ki as aC,kn as aD,bi as aE,Hg as aF,Ft as aG,Sc as aH,Fa as aI,Ih as aJ,lh as aK,w_ as aL,E_ as aM,T_ as aN,A_ as aO,M_ as aP,v_ as aQ,b_ as aR,S_ as aS,ld as aT,Jc as aU,u_ as aV,x_ as aW,Zc as aX,Tc as aa,Or as ab,ns as ac,p_ as ad,m_ as ae,f_ as af,bg as ag,Eg as ah,d_ as ai,r_ as aj,Ng as ak,i_ as al,$c as am,Dc as an,__ as ao,y_ as ap,o_ as aq,Kg as ar,g_ as as,qg as at,kr as au,De as av,t_ as aw,$r as ax,ca as ay,Bg as az,Yg as b,jm as c,Ge as d,it as e,Zm as f,or as g,ei as h,Vg as i,de as j,wi as k,Lc as l,Ze as m,e_ as n,Xg as o,Ot as p,Mc as q,Fg as r,qm as s,Ol as t,jc as u,Qg as v,bm as w,At as x,ar as y,Zg as z};
