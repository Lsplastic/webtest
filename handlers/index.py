# coding=utf-8

import tornado.web
import urllib
import urllib2
import re

class IndexHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("index.html")

    def post(self):
        inputdata = self.get_argument("input")
        response  = urllib.urlopen(inputdata)
        html      = response.read()
        dr=re.compile(r'<[^>]+>',re.S)
        rehtml=dr.sub('',html)
        self.write(rehtml)
        
