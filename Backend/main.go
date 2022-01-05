package main

import (
	
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main(){
	app := fiber.New()
	app.Use(cors.New(cors.Config{
		AllowCredentials:true,
	}))
	app.Get("/", func (c *fiber.Ctx) error {
		return c.SendString("This is the frontpage")
	})

	app.Get("/sup", func (c *fiber.Ctx) error {
		return c.JSON(fiber.Map{
			"message":"Sup ✋",
		})
	})

	app.Listen(":8000")
	
}