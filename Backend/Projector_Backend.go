package main

import (
	"github.com/gofiber/fiber/v2"
)

func main(){
	app := fiber.New()
	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello ✋")
	})

	app.Get("/sup", func(c *fiber.Ctx) error {
		return c.SendString("sup")
	})

	app.Listen(":8000")


	
}