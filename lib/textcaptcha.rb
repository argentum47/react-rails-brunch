class Textcaptcha
  require 'open-uri'
  require 'json'

  class << self
    def get_captcha(id, format = "json")
      request_url = "http://api.textcaptcha.com/#{id}.#{format}"
      buffer = open(request_url).read

      JSON.parse(buffer)
    end
  end
end
