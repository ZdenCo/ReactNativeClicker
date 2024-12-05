# Use .NET SDK to build the application
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src

# Copy the project files (csproj and appsettings.json) and restore dependencies
COPY CrudWithGraphql.csproj ./
COPY appsettings.json ./
RUN dotnet restore

# Copy all other files and publish the application
COPY . . 
RUN dotnet publish -c Release -o /app/build

# Use .NET ASP.NET runtime to run the application
FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80

# Copy the published output from the build stage
COPY --from=build /app/build .

# Set the entry point for the container to run the application
ENTRYPOINT ["dotnet", "CrudWithGraphql.dll"]
