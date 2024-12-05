using CrudBackendApp.Models;
using GraphQLMongoApp.Data;

public class Query
{
    private readonly MongoDbService _mongoDbService;

    public Query(MongoDbService mongoDbService)
    {
        _mongoDbService = mongoDbService;
    }

    public async Task<List<Item>> GetItems() => await _mongoDbService.GetItemsAsync();
    public async Task<Item> GetItem(string id) => await _mongoDbService.GetItemAsync(id);
}
