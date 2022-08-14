const activity = {
  "activity_id": uuid,
  "activity": 'Walk to work',
  "description": 'commuting on foot increases health benefits and reduces your carbon footprint!',
  "theme": themes_id, /* foreign key for IUCN themes table */
  "goal": goals_id, /* foreign key connecting UN SDGs table */
  "effect": "describe the benefit of this act",
  "how": 'link to additional info for how to do this activity',
}

const boss = {
  "boss_id": uuid,
  "title": "Climate Change",
  "status": "Active",
  "health" : 259, /* how do we find accurate health? */
  "location": location_id,
  "type": [type_id],
  "requirement": "level/occupation required to fight",
  "equipment" : "equipment needed to fight",
}