using MongoDB.Driver;
using GraphQLMongoApp;
using CrudBackendApp.Models;

namespace GraphQLMongoApp.Data
{
    public class MongoDbService
    {
        private readonly IMongoCollection<Item> _items;
        private readonly ILogger<MongoDbService> _logger;

        public MongoDbService(IConfiguration configuration, ILogger<MongoDbService> logger)
        {

            try
            {
                _logger = logger;
                  _logger.LogInformation("attempting to the database");
                var client = new MongoClient(configuration["MongoDb:ConnectionString"]);
                _logger.LogInformation("Connected to the database");
                var database = client.GetDatabase(configuration["MongoDb:DatabaseName"]);
                _logger.LogInformation("got to the database");
                _items = database.GetCollection<Item>("Items");
                _logger.LogInformation("items inited to the database");

            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while connecting to the database");
            }
        }

        public async Task<List<Item>> GetItemsAsync() =>
            await _items.Find(_ => true).ToListAsync();

        public async Task<Item> GetItemAsync(string id) =>
            await _items.Find(i => i.Id == id).FirstOrDefaultAsync();

        public async Task AddItemAsync(Item item) =>
            await _items.InsertOneAsync(item);

        public async Task UpdateItemAsync(string id, Item item) =>
            await _items.ReplaceOneAsync(i => i.Id == id, item);

        public async Task DeleteItemAsync(string id) =>
            await _items.DeleteOneAsync(i => i.Id == id);
    }
}
