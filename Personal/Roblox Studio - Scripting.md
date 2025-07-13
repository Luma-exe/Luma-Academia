
> [!faq] About this Note
>
> Class: Game Development
> Subject: #robloxStudio
> Topics: #coding/language/lua #gamedev #roblox
> Date: 2025-07-14 at 1:41AM

## Table of Contents

1. [[#Chapter 1: Introduction to Roblox Studio]]
2. [[#Chapter 2: Lua Programming Basics]]
3. [[#Chapter 3: Roblox Objects and Services]]
4. [[#Chapter 4: Scripts vs LocalScripts vs ModuleScripts]]
5. [[#Chapter 5: Events and Connections]]
6. [[#Chapter 6: Player Data and GUI]]
7. [[#Chapter 7: Physics and CFrame]]
8. [[#Chapter 8: Remote Events and Server Communication]]
9. [[#Chapter 9: DataStore and Persistence]]
10. [[#Chapter 10: Advanced Scripting Concepts]]
11. [[#Chapter 11: Debugging and Best Practices]]
12. [[#Chapter 12: Common Game Mechanics]]

---

## Chapter 1: Introduction to Roblox Studio

### What is Roblox Studio?

- A free game development platform for creating Roblox games
- Uses Lua programming language for scripting
- Provides visual editor with scripting capabilities
- Games run on Roblox's client-server architecture

### Key Components

- **Explorer**: Shows hierarchy of game objects
- **Properties**: Shows properties of selected objects
- **Script Editor**: Where you write Lua code
- **Output**: Shows print statements and error messages
- **Command Bar**: Execute single-line commands

### Getting Started

- Download Roblox Studio from roblox.com/create
- Create new place or open existing template
- Familiarize yourself with the interface
- Start with simple scripts in ServerScriptService

---

## Chapter 2: Lua Programming Basics

### Variables and Data Types

```lua
-- Variables (no need to declare type)
local myNumber = 42
local myString = "Hello World"
local myBoolean = true
local myTable = {1, 2, 3, "hello"}

-- Nil (represents no value)
local myVariable = nil
```

### Basic Operators

```lua
-- Arithmetic
local sum = 5 + 3
local product = 4 * 6
local division = 10 / 2
local modulo = 10 % 3

-- Comparison
local isEqual = (5 == 5)
local isNotEqual = (5 ~= 3)
local isGreater = (10 > 5)

-- Logical
local andResult = true and false
local orResult = true or false
local notResult = not true
```

### Control Structures

```lua
-- If statements
if condition then
    -- code
elseif anotherCondition then
    -- code
else
    -- code
end

-- For loops
for i = 1, 10 do
    print(i)
end

-- While loops
while condition do
    -- code
end

-- For-in loops (tables)
for key, value in pairs(myTable) do
    print(key, value)
end
```

### Functions

```lua
-- Function definition
local function myFunction(parameter1, parameter2)
    return parameter1 + parameter2
end

-- Function call
local result = myFunction(5, 3)

-- Anonymous function
local myVar = function(x)
    return x * 2
end
```

### Tables

```lua
-- Array-like table
local fruits = {"apple", "banana", "orange"}
print(fruits[1]) -- Prints "apple" (Lua uses 1-based indexing)

-- Dictionary-like table
local player = {
    name = "John",
    level = 5,
    health = 100
}
print(player.name) -- Prints "John"
print(player["level"]) -- Prints 5

-- Mixed table
local mixed = {
    [1] = "first",
    [2] = "second",
    name = "myTable"
}
```

---

## Chapter 3: Roblox Objects and Services

### The Game Hierarchy

- **game**: Root object containing everything
- **Workspace**: Contains all 3D objects in the game world
- **Players**: Contains Player objects for each connected player
- **ServerScriptService**: Contains server-side scripts
- **StarterPlayer**: Contains PlayerScripts and StarterPlayerScripts

### Common Services

```lua
-- Get services
local Players = game:GetService("Players")
local Workspace = game:GetService("Workspace")
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local TweenService = game:GetService("TweenService")
local RunService = game:GetService("RunService")
local UserInputService = game:GetService("UserInputService")
local DataStoreService = game:GetService("DataStoreService")
```

### Creating and Manipulating Objects

```lua
-- Create new part
local part = Instance.new("Part")
part.Name = "MyPart"
part.Size = Vector3.new(4, 1, 2)
part.Position = Vector3.new(0, 10, 0)
part.BrickColor = BrickColor.new("Bright red")
part.Parent = workspace

-- Find existing objects
local existingPart = workspace:FindFirstChild("MyPart")
local player = Players:FindFirstChild("PlayerName")

-- Wait for object to exist
local part = workspace:WaitForChild("MyPart")
```

### Object Properties

```lua
-- Common Part properties
part.Size = Vector3.new(x, y, z)
part.Position = Vector3.new(x, y, z)
part.Rotation = Vector3.new(x, y, z)
part.BrickColor = BrickColor.new("Color name")
part.Material = Enum.Material.Neon
part.Transparency = 0.5
part.CanCollide = false
part.Anchored = true
```

---

## Chapter 4: Scripts vs LocalScripts vs ModuleScripts

### Server Scripts

```lua
-- ServerScript (runs on server)
-- Located in ServerScriptService
-- Can access all game objects
-- Changes replicate to all clients

local Players = game:GetService("Players")

Players.PlayerAdded:Connect(function(player)
    print(player.Name .. " joined the game!")
end)
```

### Local Scripts

```lua
-- LocalScript (runs on client)
-- Located in StarterPlayerScripts or StarterGui
-- Can only access client-side objects
-- Changes don't replicate to other clients

local Players = game:GetService("Players")
local UserInputService = game:GetService("UserInputService")

local player = Players.LocalPlayer

UserInputService.InputBegan:Connect(function(input, gameProcessed)
    if input.KeyCode == Enum.KeyCode.Space then
        print("Space pressed!")
    end
end)
```

### Module Scripts

```lua
-- ModuleScript (shared code)
-- Can be required by other scripts
-- Returns a table/function

local MyModule = {}

function MyModule.addNumbers(a, b)
    return a + b
end

function MyModule.createPart()
    local part = Instance.new("Part")
    part.Size = Vector3.new(4, 1, 2)
    return part
end

return MyModule

-- Using the module in another script:
local MyModule = require(game.ReplicatedStorage.MyModule)
local result = MyModule.addNumbers(5, 3)
```

---

## Chapter 5: Events and Connections

### Common Events

```lua
-- Part events
part.Touched:Connect(function(hit)
    local humanoid = hit.Parent:FindFirstChild("Humanoid")
    if humanoid then
        print("Player touched the part!")
    end
end)

-- Player events
Players.PlayerAdded:Connect(function(player)
    print(player.Name .. " joined")
end)

Players.PlayerRemoving:Connect(function(player)
    print(player.Name .. " left")
end)

-- Character events
player.CharacterAdded:Connect(function(character)
    print("Character spawned")
end)
```

### Managing Connections

```lua
-- Store connection
local connection = part.Touched:Connect(function(hit)
    print("Touched!")
end)

-- Disconnect when needed
connection:Disconnect()

-- Multiple connections
local connections = {}

connections[1] = part.Touched:Connect(function(hit)
    print("Touch 1")
end)

connections[2] = part.Touched:Connect(function(hit)
    print("Touch 2")
end)

-- Disconnect all
for _, connection in pairs(connections) do
    connection:Disconnect()
end
```

### Creating Custom Events

```lua
-- Using BindableEvents for same-side communication
local bindableEvent = Instance.new("BindableEvent")

-- Fire the event
bindableEvent:Fire("Hello", "World")

-- Listen for the event
bindableEvent.Event:Connect(function(...)
    print("Received:", ...)
end)
```

---

## Chapter 6: Player Data and GUI

### Working with Players

```lua
local Players = game:GetService("Players")

-- Get local player (LocalScript only)
local player = Players.LocalPlayer

-- Player properties
print(player.Name)
print(player.UserId)
print(player.DisplayName)

-- Player character
local character = player.Character or player.CharacterAdded:Wait()
local humanoid = character:WaitForChild("Humanoid")
local rootPart = character:WaitForChild("HumanoidRootPart")

-- Player stats
local leaderstats = Instance.new("Folder")
leaderstats.Name = "leaderstats"
leaderstats.Parent = player

local coins = Instance.new("IntValue")
coins.Name = "Coins"
coins.Value = 0
coins.Parent = leaderstats
```

### GUI Creation

```lua
-- Create ScreenGui (LocalScript)
local screenGui = Instance.new("ScreenGui")
screenGui.Parent = player.PlayerGui

-- Create Frame
local frame = Instance.new("Frame")
frame.Size = UDim2.new(0, 200, 0, 100)
frame.Position = UDim2.new(0.5, -100, 0.5, -50)
frame.BackgroundColor3 = Color3.fromRGB(100, 100, 100)
frame.Parent = screenGui

-- Create TextLabel
local label = Instance.new("TextLabel")
label.Size = UDim2.new(1, 0, 0.5, 0)
label.Position = UDim2.new(0, 0, 0, 0)
label.Text = "Hello World!"
label.TextColor3 = Color3.fromRGB(255, 255, 255)
label.BackgroundTransparency = 1
label.Parent = frame

-- Create Button
local button = Instance.new("TextButton")
button.Size = UDim2.new(1, 0, 0.5, 0)
button.Position = UDim2.new(0, 0, 0.5, 0)
button.Text = "Click Me!"
button.Parent = frame

button.MouseButton1Click:Connect(function()
    print("Button clicked!")
end)
```

### UDim2 Positioning

```lua
-- UDim2.new(scaleX, offsetX, scaleY, offsetY)
-- Scale: 0 to 1 (percentage of parent)
-- Offset: pixels

local centerPosition = UDim2.new(0.5, -100, 0.5, -50) -- Center with 200x100 size
local topLeft = UDim2.new(0, 0, 0, 0)
local bottomRight = UDim2.new(1, 0, 1, 0)
```

---

## Chapter 7: Physics and CFrame

### Vector3 Operations

```lua
-- Create vectors
local position = Vector3.new(10, 5, 0)
local direction = Vector3.new(1, 0, 0)

-- Vector operations
local sum = position + direction
local scaled = direction * 5
local magnitude = direction.Magnitude
local normalized = direction.Unit

-- Useful vectors
local up = Vector3.new(0, 1, 0)
local forward = Vector3.new(0, 0, -1)
local right = Vector3.new(1, 0, 0)
```

### CFrame (Coordinate Frame)

```lua
-- Create CFrame
local cframe = CFrame.new(10, 5, 0) -- Position only
local cframeWithRotation = CFrame.new(position, lookDirection)

-- CFrame operations
local newCFrame = cframe * CFrame.new(0, 5, 0) -- Move up 5 studs
local rotated = cframe * CFrame.Angles(0, math.rad(90), 0) -- Rotate 90 degrees

-- Apply to parts
part.CFrame = cframe
part.CFrame = part.CFrame * CFrame.new(0, 1, 0) -- Move up 1 stud
```

### BodyMovers and Physics

```lua
-- BodyVelocity (deprecated, use AssemblyLinearVelocity)
part.AssemblyLinearVelocity = Vector3.new(0, 50, 0) -- Move up

-- BodyPosition replacement: AlignPosition
local attachment = Instance.new("Attachment")
attachment.Parent = part

local alignPosition = Instance.new("AlignPosition")
alignPosition.Attachment0 = attachment
alignPosition.Position = Vector3.new(0, 10, 0)
alignPosition.Parent = part

-- Physics properties
part.CustomPhysicalProperties = PhysicalProperties.new(
    0.7, -- Density
    0.5, -- Friction
    0.5, -- Elasticity
    1,   -- FrictionWeight
    1    -- ElasticityWeight
)
```

---

## Chapter 8: Remote Events and Server Communication

### Remote Events

```lua
-- Create RemoteEvent in ReplicatedStorage
local remoteEvent = Instance.new("RemoteEvent")
remoteEvent.Name = "MyRemoteEvent"
remoteEvent.Parent = game.ReplicatedStorage

-- Server script - handle client requests
remoteEvent.OnServerEvent:Connect(function(player, message)
    print(player.Name .. " sent: " .. message)
    
    -- Send back to all clients
    remoteEvent:FireAllClients("Server response: " .. message)
    
    -- Send back to specific client
    remoteEvent:FireClient(player, "Personal response")
end)

-- LocalScript - send to server
local remoteEvent = game.ReplicatedStorage:WaitForChild("MyRemoteEvent")

-- Fire to server
remoteEvent:FireServer("Hello from client!")

-- Handle server response
remoteEvent.OnClientEvent:Connect(function(message)
    print("Server sent: " .. message)
end)
```

### Remote Functions

```lua
-- Create RemoteFunction
local remoteFunction = Instance.new("RemoteFunction")
remoteFunction.Name = "MyRemoteFunction"
remoteFunction.Parent = game.ReplicatedStorage

-- Server script - handle and return value
remoteFunction.OnServerInvoke = function(player, number)
    return number * 2
end

-- LocalScript - invoke and get return value
local result = remoteFunction:InvokeServer(5)
print("Result:", result) -- Prints "Result: 10"
```

### Security Considerations

```lua
-- Server script - always validate client input
remoteEvent.OnServerEvent:Connect(function(player, data)
    -- Validate player exists
    if not player or not player.Parent then
        return
    end
    
    -- Validate data type
    if type(data) ~= "string" then
        return
    end
    
    -- Validate data content
    if #data > 100 then -- Too long
        return
    end
    
    -- Process validated data
    print("Valid data from " .. player.Name)
end)
```

---

## Chapter 9: DataStore and Persistence

### DataStore Setup

```lua
-- Server script only
local DataStoreService = game:GetService("DataStoreService")
local Players = game:GetService("Players")

-- Create DataStore
local playerDataStore = DataStoreService:GetDataStore("PlayerData")

-- Default data structure
local defaultData = {
    coins = 0,
    level = 1,
    inventory = {}
}
```

### Save and Load Data

```lua
-- Load player data
local function loadPlayerData(player)
    local success, data = pcall(function()
        return playerDataStore:GetAsync(player.UserId)
    end)
    
    if success then
        return data or defaultData
    else
        warn("Failed to load data for " .. player.Name)
        return defaultData
    end
end

-- Save player data
local function savePlayerData(player, data)
    local success = pcall(function()
        playerDataStore:SetAsync(player.UserId, data)
    end)
    
    if success then
        print("Data saved for " .. player.Name)
    else
        warn("Failed to save data for " .. player.Name)
    end
end

-- Player join
Players.PlayerAdded:Connect(function(player)
    local data = loadPlayerData(player)
    
    -- Create leaderstats
    local leaderstats = Instance.new("Folder")
    leaderstats.Name = "leaderstats"
    
    local coins = Instance.new("IntValue")
    coins.Name = "Coins"
    coins.Value = data.coins
    coins.Parent = leaderstats
    
    leaderstats.Parent = player
end)

-- Player leave
Players.PlayerRemoving:Connect(function(player)
    local leaderstats = player:FindFirstChild("leaderstats")
    if leaderstats then
        local data = {
            coins = leaderstats.Coins.Value,
            level = 1, -- Get from wherever you store it
            inventory = {} -- Get from wherever you store it
        }
        
        savePlayerData(player, data)
    end
end)
```

### Auto-save System

```lua
-- Auto-save every 5 minutes
local RunService = game:GetService("RunService")

local lastSaveTime = 0
local SAVE_INTERVAL = 300 -- 5 minutes

RunService.Heartbeat:Connect(function()
    local currentTime = tick()
    
    if currentTime - lastSaveTime >= SAVE_INTERVAL then
        lastSaveTime = currentTime
        
        -- Save all player data
        for _, player in pairs(Players:GetPlayers()) do
            local leaderstats = player:FindFirstChild("leaderstats")
            if leaderstats then
                local data = {
                    coins = leaderstats.Coins.Value,
                    level = 1,
                    inventory = {}
                }
                
                savePlayerData(player, data)
            end
        end
    end
end)
```

---

## Chapter 10: Advanced Scripting Concepts

### Tweening

```lua
local TweenService = game:GetService("TweenService")

-- Create tween
local part = workspace.Part
local tweenInfo = TweenInfo.new(
    2, -- Duration
    Enum.EasingStyle.Quad, -- Easing style
    Enum.EasingDirection.Out, -- Easing direction
    0, -- Repeat count (0 = no repeat)
    false, -- Reverses
    0 -- Delay
)

local tween = TweenService:Create(part, tweenInfo, {
    Position = Vector3.new(0, 10, 0),
    Size = Vector3.new(8, 8, 8),
    Transparency = 0.5
})

-- Play tween
tween:Play()

-- Tween events
tween.Completed:Connect(function()
    print("Tween completed!")
end)
```

### Coroutines

```lua
-- Create coroutine
local function countDown()
    for i = 10, 1, -1 do
        print(i)
        wait(1)
    end
    print("Done!")
end

-- Start coroutine
spawn(countDown)

-- Or use coroutine.create
local co = coroutine.create(countDown)
coroutine.resume(co)
```

### Metatables

```lua
-- Create class-like behavior
local Player = {}
Player.__index = Player

function Player.new(name, health)
    local self = setmetatable({}, Player)
    self.name = name
    self.health = health
    return self
end

function Player:takeDamage(damage)
    self.health = self.health - damage
    if self.health <= 0 then
        print(self.name .. " died!")
    end
end

-- Usage
local player1 = Player.new("John", 100)
player1:takeDamage(50)
```

### Raycasting

```lua
-- Create raycast
local origin = Vector3.new(0, 10, 0)
local direction = Vector3.new(0, -20, 0)

local raycastParams = RaycastParams.new()
raycastParams.FilterType = Enum.RaycastFilterType.Blacklist
raycastParams.FilterDescendantsInstances = {workspace.IgnoreFolder}

local raycastResult = workspace:Raycast(origin, direction, raycastParams)

if raycastResult then
    print("Hit:", raycastResult.Instance.Name)
    print("Position:", raycastResult.Position)
    print("Normal:", raycastResult.Normal)
    
    -- Create visual indicator
    local part = Instance.new("Part")
    part.Size = Vector3.new(1, 1, 1)
    part.Position = raycastResult.Position
    part.BrickColor = BrickColor.new("Bright red")
    part.Anchored = true
    part.Parent = workspace
end
```

---

## Chapter 11: Debugging and Best Practices

### Debugging Tools

```lua
-- Print debugging
print("Debug message")
warn("Warning message")
error("Error message")

-- Print with formatting
print(string.format("Player %s has %d coins", player.Name, coins))

-- Print tables
local function printTable(t, indent)
    indent = indent or 0
    for key, value in pairs(t) do
        local spacing = string.rep("  ", indent)
        if type(value) == "table" then
            print(spacing .. key .. ":")
            printTable(value, indent + 1)
        else
            print(spacing .. key .. ": " .. tostring(value))
        end
    end
end

printTable(myTable)
```

### Error Handling

```lua
-- pcall for safe function calls
local success, result = pcall(function()
    -- Code that might error
    return someRiskyFunction()
end)

if success then
    print("Success:", result)
else
    warn("Error:", result)
end

-- xpcall for detailed error info
local function errorHandler(err)
    print("Error occurred:", err)
    print("Stack trace:", debug.traceback())
end

local success, result = xpcall(function()
    -- Code that might error
    return someRiskyFunction()
end, errorHandler)
```

### Performance Best Practices

```lua
-- Cache frequently used services
local Players = game:GetService("Players")
local RunService = game:GetService("RunService")

-- Cache object references
local player = Players.LocalPlayer
local character = player.Character or player.CharacterAdded:Wait()
local humanoid = character:WaitForChild("Humanoid")

-- Use local variables
local function optimizedFunction()
    local workspace = game.Workspace -- Cache global
    
    for i = 1, 1000 do
        local part = workspace.Part -- Don't repeat lookups
        -- Do something with part
    end
end

-- Avoid creating objects in loops
local parts = {}
for i = 1, 100 do
    local part = Instance.new("Part")
    part.Size = Vector3.new(1, 1, 1)
    part.Position = Vector3.new(i, 0, 0)
    part.Parent = workspace
    parts[i] = part
end
```

### Code Organization

```lua
-- Use ModuleScripts for reusable code
-- PlayerManager.lua
local PlayerManager = {}
local Players = game:GetService("Players")

local playerData = {}

function PlayerManager.getPlayerData(player)
    return playerData[player]
end

function PlayerManager.setPlayerData(player, data)
    playerData[player] = data
end

function PlayerManager.init()
    Players.PlayerAdded:Connect(function(player)
        playerData[player] = {
            coins = 0,
            level = 1
        }
    end)
    
    Players.PlayerRemoving:Connect(function(player)
        playerData[player] = nil
    end)
end

return PlayerManager

-- Main script
local PlayerManager = require(game.ServerScriptService.PlayerManager)
PlayerManager.init()
```

---

## Chapter 12: Common Game Mechanics

### Shop System

```lua
-- Shop ModuleScript
local Shop = {}
local Players = game:GetService("Players")

local items = {
    ["Speed Boost"] = {
        price = 100,
        description = "Increases walkspeed by 50%"
    },
    ["Jump Boost"] = {
        price = 150,
        description = "Increases jump power by 100%"
    }
}

function Shop.purchaseItem(player, itemName)
    local item = items[itemName]
    if not item then
        return false, "Item not found"
    end
    
    local leaderstats = player:FindFirstChild("leaderstats")
    if not leaderstats then
        return false, "No leaderstats found"
    end
    
    local coins = leaderstats:FindFirstChild("Coins")
    if not coins then
        return false, "No coins found"
    end
    
    if coins.Value < item.price then
        return false, "Not enough coins"
    end
    
    coins.Value = coins.Value - item.price
    
    -- Apply item effect
    if itemName == "Speed Boost" then
        local character = player.Character
        if character then
            local humanoid = character:FindFirstChild("Humanoid")
            if humanoid then
                humanoid.WalkSpeed = humanoid.WalkSpeed * 1.5
            end
        end
    end
    
    return true, "Purchase successful"
end

function Shop.getItems()
    return items
end

return Shop
```

### Inventory System

```lua
-- Inventory ModuleScript
local Inventory = {}

local playerInventories = {}

function Inventory.getInventory(player)
    if not playerInventories[player] then
        playerInventories[player] = {}
    end
    return playerInventories[player]
end

function Inventory.addItem(player, item, quantity)
    local inventory = Inventory.getInventory(player)
    quantity = quantity or 1
    
    if inventory[item] then
        inventory[item] = inventory[item] + quantity
    else
        inventory[item] = quantity
    end
end

function Inventory.removeItem(player, item, quantity)
    local inventory = Inventory.getInventory(player)
    quantity = quantity or 1
    
    if inventory[item] and inventory[item] >= quantity then
        inventory[item] = inventory[item] - quantity
        if inventory[item] <= 0 then
            inventory[item] = nil
        end
        return true
    end
    return false
end

function Inventory.hasItem(player, item, quantity)
    local inventory = Inventory.getInventory(player)
    quantity = quantity or 1
    return inventory[item] and inventory[item] >= quantity
end

return Inventory
```

### Teleportation System

```lua
-- Teleporter script
local TeleportService = game:GetService("TeleportService")
local Players = game:GetService("Players")

-- Teleport to another place
local function teleportToPlace(player, placeId)
    local success, errorMessage = pcall(function()
        TeleportService:Teleport(placeId, player)
    end)
    
    if not success then
        warn("Teleport failed:", errorMessage)
    end
end

-- Teleport pad
local teleportPad = workspace.TeleportPad
local DESTINATION_PLACE_ID = 123456789

teleportPad.Touched:Connect(function(hit)
    local humanoid = hit.Parent:FindFirstChild("Humanoid")
    if humanoid then
        local player = Players:GetPlayerFromCharacter(hit.Parent)
        if player then
            teleportToPlace(player, DESTINATION_PLACE_ID)
        end
    end
end)
```

### Team System

```lua
-- Team manager
local Teams = game:GetService("Teams")
local Players = game:GetService("Players")

-- Create teams
local redTeam = Instance.new("Team")
redTeam.Name = "Red Team"
redTeam.TeamColor = BrickColor.new("Bright red")
redTeam.Parent = Teams

local blueTeam = Instance.new("Team")
blueTeam.Name = "Blue Team"
blueTeam.TeamColor = BrickColor.new("Bright blue")
blueTeam.Parent = Teams

-- Auto-assign teams
Players.PlayerAdded:Connect(function(player)
    local redCount = #redTeam:GetPlayers()
    local blueCount = #blueTeam:GetPlayers()
    
    if redCount <= blueCount then
        player.Team = redTeam
    else
        player.Team = blueTeam
    end
end)

-- Team-only damage
local function onCharacterAdded(character)
    local humanoid = character:WaitForChild("Humanoid")
    
    humanoid.Died:Connect(function()
        local player = Players:GetPlayerFromCharacter(character)
        if player then
            -- Respawn logic
            wait(5)
            player:LoadCharacter()
        end
    end)
end

Players.PlayerAdded:Connect(function(player)
    player.CharacterAdded:Connect(onCharacterAdded)
    if player.Character then
        onCharacterAdded(player.Character)
    end
end)
```

---

## Summary

### Key Scripting Concepts

#### Essential Services
- **Players**: Manage player objects and events
- **RunService**: Handle game loops and timing
- **TweenService**: Create smooth animations
- **UserInputService**: Handle user input (LocalScript only)
- **ReplicatedStorage**: Share objects between server and client
- **DataStoreService**: Save/load persistent data

#### Script Types
- **ServerScript**: Runs on server, has full access, changes replicate
- **LocalScript**: Runs on client, limited access, changes don't replicate
- **ModuleScript**: Shared code, must be required by other scripts

#### Core Programming Patterns
- Event-driven programming with Connect/Disconnect
- Client-server communication with RemoteEvents/RemoteFunctions
- Object-oriented design with metatables
- Error handling with pcall/xpcall
- Coroutines for non-blocking operations

#### Best Practices
- Always validate input from clients on the server
- Cache frequently used services and objects
- Use local variables for better performance
- Handle errors gracefully with pcall
- Organize code into ModuleScripts for reusability
- Use meaningful variable names and comments

#### Common Mistakes
- LocalScripts can't access ServerScriptService
- RemoteEvents fire to all clients by default
- Lua uses 1-based indexing (not 0-based)
- Always wait for objects to exist before using them
- DataStore has request limits and can fail

#### Security Reminders
- Never trust client input
- Validate all parameters in RemoteEvent handlers
- Use sanity checks for data types and ranges
- Implement rate limiting for client requests
- Keep sensitive logic on the server only