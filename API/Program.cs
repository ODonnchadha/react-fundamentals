using API.Models;
using API.Repositories;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors();
builder.Services.AddSingleton<HouseRepository>();
builder.Services.AddSingleton<BidRepository>();

var app = builder.Build();
app.UseCors(o => o.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseHttpsRedirection();

app.MapGet("/bids/{houseId}", async (BidRepository repo, int houseId) =>
{
    await Task.Delay(2000);
    return repo.GetBids(houseId);
});
app.MapGet("/houses", async (HouseRepository repo) =>
{
    await Task.Delay(2000);
    return repo.GetAll();
});
app.MapPost("/bids", async (BidRepository repo, Bid bid) =>
{
    await Task.Delay(2000);
    repo.Add(bid);
    return bid;
});
app.MapPost("/houses", async (HouseRepository repo, House house) =>
{
    await Task.Delay(2000);
    repo.Add(house);
    return house;
});

app.Run();
