using GraphQLMongoApp.Data;
using Microsoft.Extensions.Logging;

var builder = WebApplication.CreateBuilder(args);

// Configure logging
builder.Services.AddLogging();
builder.Logging.ClearProviders();  // Optionally clear existing providers
builder.Logging.AddConsole();      // Add console logging

// Register MongoDbService as a singleton
builder.Services.AddSingleton<MongoDbService>();

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Register GraphQL server
builder.Services.AddGraphQLServer().AddQueryType<Query>().AddMutationType<Mutation>();

var app = builder.Build();

app.UseMiddleware<ApiKeyMiddleware>();

app.UseSwagger();
app.UseSwaggerUI();

app.MapControllers();


app.Run();
