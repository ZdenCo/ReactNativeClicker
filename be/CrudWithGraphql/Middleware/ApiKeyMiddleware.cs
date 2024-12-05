public class ApiKeyMiddleware
{
    private readonly RequestDelegate _next;
    private const string ApiKeyHeaderName = "X-Api-Key";

    public ApiKeyMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        if (!context.Request.Headers.TryGetValue(ApiKeyHeaderName, out var extractedApiKey))
        {
            context.Response.StatusCode = 401; // Unauthorized
            await context.Response.WriteAsync("API Key is missing");
            return;
        }

        var configuredApiKey = Environment.GetEnvironmentVariable("API_KEY");
        if (extractedApiKey != configuredApiKey)
        {
            context.Response.StatusCode = 403; // Forbidden
            await context.Response.WriteAsync("Invalid API Key");
            return;
        }

        await _next(context);
    }
}
