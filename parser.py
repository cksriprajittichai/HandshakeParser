#!/usr/bin/env python3

import sys
from bs4 import BeautifulSoup
import re

school_shortname = 'pitt'
# school_shortname = 'ucsd'
school_location = 'pittsburgh'
# school_location = 'sandiego'

source_file = f'res/filters-internship-{school_location}_keyword-software.htm' 
# source_file = f'res/filters-internship-{school_location}_keyword-software.htm'
out_filename = 'out.tsv'
out_str = 'Number\tCompany\tPosition\tLocation\tAll Employer Preferences Match\tDeadline\n'

search_results = BeautifulSoup(open(source_file), 'html.parser').find('div', {'data-hook': 'search-results'})

result_number = 1
for result in search_results:
	name = result.find('a', href=re.compile(f'^https://{school_shortname}.joinhandshake.com/employers'))['title'].strip()

	position = result.find('a', href=re.compile(f'^https://{school_shortname}.joinhandshake.com/jobs')).string.strip()

	# There might be <span> tags within <div> that have additional text (i.e. 'and 1 more') 
	location = result.find('div', {'class': re.compile('^style__list-with-tooltip')}).text.strip()

	# Element doesn't exist if all employer preferences don't match
	preferences_match = result.find('svg', {'class': re.compile('^svg-inline--fa fa-check-circle')}) is not None	
	
	# Original string has a few formats: 
	# 1) "Apply before <day of the week>, <month>/<day>" -> keep the "<month>/<day>"
	# 2) "Apply today" -> let it be
	deadline = result.find('svg', {'class': re.compile('^svg-inline--fa fa-file-alt')}).find_next('span').text.strip()
	digit_ndx = re.search('\d', deadline)
	if digit_ndx is not None:
		deadline = deadline[digit_ndx.start():]

	out_str += '\t'.join([str(result_number), name, position, location, str(preferences_match), deadline, '\n'])
	result_number += 1

out_file = open(out_filename, 'w', encoding='utf-8')
out_file.write(out_str)
out_file.close()

