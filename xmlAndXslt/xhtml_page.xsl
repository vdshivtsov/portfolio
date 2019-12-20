<?xml version="1.0" encoding="UTF-8"?>
 <xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
 	
	<xsl:template match="/">
		<html>
			<header>
				<title>XSLT in Use ))</title>
				<style>
					span {
						display: block-inline;
						margin-right: 1em;
					}
				</style>
			</header>
			<body>
				<ol>
					<h1>Расписание занятий</h1>
					<xsl:apply-templates select="/schedule/day" />
				</ol>
			</body>
		</html>
 	</xsl:template>
	
	<xsl:template match="day">
 		<li>
			<span><xsl:value-of select="date" /></span>
			<span><xsl:value-of select="time" /></span>
			<span><xsl:value-of select="modul" /></span>
		</li>
 	</xsl:template>
	
 </xsl:stylesheet>