import raylib from "./raylib"

const screenWidth = 800
const screenHeight = 450

raylib.InitWindow(screenWidth, screenHeight, "raylib [core] example - circle avoiding cursor")
raylib.SetTargetFPS(60)

// Circle properties
let circleX = screenWidth / 2
let circleY = screenHeight / 2
const circleRadius = 30
const avoidDistance = 100 // Distance at which circle starts avoiding cursor
const moveSpeed = 2

while (!raylib.WindowShouldClose()) {
    // Get mouse position
    const mouseX = raylib.GetMouseX()
    const mouseY = raylib.GetMouseY()
    
    // Calculate distance between circle and mouse
    const dx = circleX - mouseX
    const dy = circleY - mouseY
    const distance = Math.sqrt(dx * dx + dy * dy)
    
    // If mouse is too close, move circle away
    if (distance < avoidDistance && distance > 0) {
        // Normalize direction vector
        const dirX = dx / distance
        const dirY = dy / distance
        
        // Move circle away from mouse
        circleX += dirX * moveSpeed
        circleY += dirY * moveSpeed
        
        // Keep circle within screen bounds
        circleX = Math.max(circleRadius, Math.min(screenWidth - circleRadius, circleX))
        circleY = Math.max(circleRadius, Math.min(screenHeight - circleRadius, circleY))
    }
    
    raylib.BeginDrawing()
    raylib.ClearBackground(raylib.RAYWHITE)
    
    // Draw the avoiding circle
    raylib.DrawCircle(circleX, circleY, circleRadius, {r: 4, g: 59, b:92, a: 255})
    
    // Draw avoidance zone (optional - for visualization)
    raylib.DrawCircleLines(circleX, circleY, avoidDistance, raylib.LIGHTGRAY)
    
    // Draw instructions
    raylib.DrawText("Move your mouse near the blue circle!", 10, 10, 20, raylib.DARKGRAY)
    
    raylib.EndDrawing()
}

raylib.CloseWindow()