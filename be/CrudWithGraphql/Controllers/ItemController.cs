using CrudBackendApp.Models;
using GraphQLMongoApp.Data;
using Microsoft.AspNetCore.Mvc;

namespace GraphQLMongoApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ItemController: ControllerBase {
        private readonly MongoDbService _mongoDbService;

        public ItemController(MongoDbService mongoDbService)
        {
            _mongoDbService = mongoDbService;
        }

    [HttpGet]
    public async Task<IActionResult> GetItems()
    {
        var items = await _mongoDbService.GetItemsAsync();
        return Ok(items);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetItem(string id)
    {
        var item = await _mongoDbService.GetItemAsync(id);
        return item != null ? Ok(item) : NotFound();
    }

    [HttpPost]
    public async Task<IActionResult> AddItem(Item item)
    {
        await _mongoDbService.AddItemAsync(item);
        return CreatedAtAction(nameof(GetItem), new { id = item.Id }, item);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateItem(string id, Item item)
    {
        if (id != item.Id)
        {
            return BadRequest();
        }

        await _mongoDbService.UpdateItemAsync(id, item);
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteItem(string id)
    {
        await _mongoDbService.DeleteItemAsync(id);
        return NoContent();
    }

    }
}