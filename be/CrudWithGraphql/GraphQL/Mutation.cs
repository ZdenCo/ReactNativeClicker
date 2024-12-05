

using CrudBackendApp.Models;
using GraphQLMongoApp.Data;

public class Mutation
{
    private readonly MongoDbService _mongoDbService;

    public Mutation(MongoDbService mongoDbService)
    {
        _mongoDbService = mongoDbService;
    }

    public async Task<Item> AddItem(string name, string description)
    {
        var item = new Item { Name = name, Description = description };
        await _mongoDbService.AddItemAsync(item);
        return item;
    }

    public async Task<Item> UpdateItem(string id, string name, string description)
    {
        var item = new Item { Id = id, Name = name, Description = description };
        await _mongoDbService.UpdateItemAsync(id, item);
        return item;
    }

    public async Task<bool> DeleteItem(string id)
    {
        await _mongoDbService.DeleteItemAsync(id);
        return true;
    }
}
