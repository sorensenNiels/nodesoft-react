export const db = process.env.MONGOHQ_URL || process.env.MONGODB_URI || 'mongodb://nodeSoft:C==lPl3x@nodesoft-shard-00-00-ixuvr.mongodb.net:27017,nodesoft-shard-00-01-ixuvr.mongodb.net:27017,nodesoft-shard-00-02-ixuvr.mongodb.net:27017/test?ssl=true&replicaSet=nodeSoft-shard-0&authSource=admin&retryWrites=true';

export default {
  db
};
