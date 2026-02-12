import { MsgIcon, PhoneIcon } from '@/utils/icons'

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-secondary my-8 rounded-4xl p-8 md:my-16">
      <div className="flex flex-col justify-between gap-8">
        <div>
          <h3 className="text-neutral text-3xl font-bold">Let's Talk</h3>
          <h4 className="text-accent text-2xl font-bold md:text-3xl">We'd love to help</h4>
          <p className="text-neutral mt-8">
            Crafting innovative solutions to solve real-world problems
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-neutral text-lg font-bold">Contact Information</p>
          <a
            href="mailto:jsorianopijuan99@gmail.com"
            className="text-neutral hover:text-accent flex items-center gap-1 font-light transition-colors duration-300">
            <MsgIcon /> jsorianopijuan99@gmail.com
          </a>
          <a
            href="tel:+34 645818944"
            className="text-neutral hover:text-accent flex items-center gap-1 font-light transition-colors duration-300">
            <PhoneIcon /> +34 645818944
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
