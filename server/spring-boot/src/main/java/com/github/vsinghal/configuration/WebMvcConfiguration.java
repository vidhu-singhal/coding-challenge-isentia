package com.github.vsinghal.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/** @author Vidhu Singhal <vidhu.singhal@gmail.com> */

@Configuration
@PropertySource("file:./config/env.properties")
public class WebMvcConfiguration extends WebMvcConfigurerAdapter {

	@Value("${front.end.location}")
	private String frontEndLocation;

	@Value("${front.end.mapping.url}")
	private String frontEndMappingUrl;
	

	@Override
	public void addResourceHandlers(final ResourceHandlerRegistry registry) {
	    registry.addResourceHandler(frontEndMappingUrl).addResourceLocations(frontEndLocation);
	}

	@Override
	public void addViewControllers(ViewControllerRegistry registry) {
		registry.addViewController("/").setViewName("forward:/index.html");
	}
}
