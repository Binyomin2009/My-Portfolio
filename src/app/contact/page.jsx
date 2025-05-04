"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { MapPin, Mail, Phone, Send } from "lucide-react"
import { motion } from "framer-motion"
import axios from "axios"

export default function ContactForm() {
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const message = `
📬 Новое сообщение с сайта:
👤 Имя: ${formData.name}
📞 Телефон: ${formData.phone}
📧 Email: ${formData.email}
📝 Сообщение: ${formData.message}
        `

        try {
            await axios.post(`https://api.telegram.org/bot7911804537:AAFPaUjKHagW2hLI4sDUqsVKtIsPSAe2nCM/sendMessage`, {
                chat_id: "6065744001",
                text: message,
                parse_mode: "HTML",
            })

            setFormSubmitted(true)

            setTimeout(() => {
                setFormSubmitted(false)
                setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    message: "",
                })
            }, 10000)
        } catch (error) {
            console.error("Ошибка при отправке в Telegram:", error)
        }
    }

    return (
        <div className="w-full max-w-6xl mx-auto p-6 rounded-lg bg-background">
            <div className="text-center space-y-2">
                <h2 className="text-4xl font-bold tracking-tight">Contact Me</h2>
                <div className="w-16 h-1 bg-purple-500 mx-auto" />
                <p className="text-muted-foreground">
                    Want to collaborate? Feel free to contact me!
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-10 items-stretch">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="space-y-4 h-full"
                >
                    <Card className="p-4 flex items-start gap-4">
                        <div className="bg-purple-500 rounded-full p-3">
                            <MapPin className="text-white w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg">Location</h4>
                            <p className="text-muted-foreground">Dushanbe, Tajikistan</p>
                        </div>
                    </Card>
                    <Card className="p-4 flex items-start gap-4">
                        <div className="bg-purple-500 rounded-full p-3">
                            <Mail className="text-white w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg">Email</h4>
                            <p className="text-muted-foreground">binyomin927@gmail.com</p>
                        </div>
                    </Card>
                    <Card className="p-4 flex items-start gap-4">
                        <div className="bg-purple-500 rounded-full p-3">
                            <Phone className="text-white w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg">Phone</h4>
                            <p className="text-muted-foreground">+992-052-77-22-22</p>
                        </div>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="space-y-4 h-full"
                >
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <Input
                            className="h-[70px]"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                        />
                        <Input
                            className="h-[70px]"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Your Phone"
                            required
                        />
                        <Input
                            className="h-[70px]"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            type="email"
                            required
                        />
                        <Textarea
                            className="h-[85px]"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            required
                        />
                        <Button
                            type="submit"
                            className="w-full bg-purple-600 text-white hover:bg-purple-700"
                        >
                            <Send className="w-4 h-4 mr-2" /> Send Message
                        </Button>

                        {formSubmitted && (
                            <div className="text-green-600 bg-green-100 p-4 rounded text-center">
                                Спасибо! Ваше сообщение успешно отправлено.
                            </div>
                        )}
                    </form>
                </motion.div>
            </div>
        </div>
    )
}
